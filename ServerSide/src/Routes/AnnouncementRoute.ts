import { Router, Request, Response } from 'express';
import AnnouncementMethods from '../Database/Models/AnnouncementModel';

const announcement = Router();
const announcementMethods = new AnnouncementMethods('announcements');

announcement.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, subject, message, imageLink } = req.body;
    await announcementMethods.addAnnouncement(
      message,
      name,
      subject,
      imageLink,
    );
    res.json({ response: 'added' });
  } catch (err) {
    res.json({ response: err });
  }
});

announcement.get('/', async (req: Request, res: Response): Promise<void> => {
  const announcementId: string | undefined = req.query.id as string | undefined;
  const response = (await announcementMethods.getAnnouncement(
    announcementId as string | undefined,
  )) as [];
  if (typeof response === 'object' && response.length > 0) {
    res.json({ response });
  } else {
    res.json({ response: 'no announcements yet' });
  }
});

announcement.put('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id, subject, name, message, imageLink } = req.body;
    const updateResponse: object | unknown =
      await announcementMethods.updateAnnouncement(
        id,
        subject,
        name,
        message,
        imageLink,
      );
    res.json({ response: updateResponse });
  } catch (err) {
    res.json({ response: err });
  }
});

announcement.delete('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.query;
    const deleteResponse = await announcementMethods.deleteAnnouncement(
      id as string | number,
    );
    if (
      deleteResponse &&
      (deleteResponse as { deletedCount: string | number }).deletedCount === 1
    ) {
      res.json({ response: 'deleted' });
    } else {
      res.json({ response: 'not found' });
    }
  } catch (err) {
    res.json({ response: err });
  }
});

export default announcement;

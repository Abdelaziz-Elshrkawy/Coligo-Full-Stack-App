import Connection from '../DBConnection';
import announcementSchema from '../Schemas/AnnouncementSchema';

export default class AnnouncementMethods {
  #AnnouncementModel;
  constructor(modelName: string) {
    this.#AnnouncementModel = Connection.model(modelName, announcementSchema);
  }
  addAnnouncement = async (
    message: string,
    name: string,
    subject: string,
    imageLink: string,
  ) => {
    console.log('announcement');
    try {
      const announcement = new this.#AnnouncementModel({
        message,
        name,
        subject,
        imageLink,
      });
      await announcement.save();
      return announcement;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  getAnnouncement = async (id: string | number | undefined) => {
    try {
      if (id) {
        return this.#AnnouncementModel.findOne({ _id: id });
      } else {
        return this.#AnnouncementModel.find();
      }
    } catch (err) {
      return err;
    }
  };

  updateAnnouncement = async (
    id: string,
    subject: string,
    name: string,
    message: string,
    imageLink: string,
  ) => {
    try {
      const announcement = await this.#AnnouncementModel.findOne({ _id: id });
      announcement!.subject = subject;
      announcement!.name = name;
      announcement!.message = message;
      announcement!.imageLink = imageLink;
      await announcement!.save();
      return announcement;
    } catch (err) {
      return err;
    }
  };

  deleteAnnouncement = async (id: string | number) => {
    try {
      return await this.#AnnouncementModel.deleteOne({ _id: id });
    } catch (err) {
      return err;
    }
  };
}

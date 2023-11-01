export default interface IServicesThumb {
  id: number;
  thumbnail: string;
  title: string;
  text: string;
  url: string;
  aspectRatio: IServicesThumbAspectRatio;
}

interface IServicesThumbAspectRatio {
  width: number;
  height: number;
}
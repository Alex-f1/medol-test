export default interface INewsThumb {
  id: number;
  thumbnail: string;
  title: string;
  date: string;
  text: string;
  url: string;
  aspectRatio: INewsThumbAspectRatio;
}

interface INewsThumbAspectRatio {
  width: number;
  height: number;
}
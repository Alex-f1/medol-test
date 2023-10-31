export default interface IProductThumb {
  id: number;
  thumbnail: string;
  title: string;
  aspectRatio: IProductThumbAspectRatio;
}

interface IProductThumbAspectRatio {
  width: number;
  height: number;
}
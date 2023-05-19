export class Banda {
  id:string;
  name:string;
  foundation_year:number;
  country:string;
  genre:string;
  description:string;
  image:string;

  constructor(  id:string,
    name:string,
    foundation_year:number,
    country:string,
    genre:string,
    description:string,
    image:string)
    {
      this.id=id, this.name=name,
      this.foundation_year=foundation_year,
      this.country=country,
      this.genre=genre, this.description=description
      this.image=image;
    }

}

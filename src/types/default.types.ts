export interface ICarouselCard {
    name?: string;
    description?: string;
    image?: string;
    banner?: string;
}

export interface ICarouselCategory extends ICarouselCard {
    icon: string[]
    logo: string
}
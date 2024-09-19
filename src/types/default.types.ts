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

export interface NavMobileSearchProps {
    setActive: React.Dispatch<React.SetStateAction<string>>
    active: string;
}
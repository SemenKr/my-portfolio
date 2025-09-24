import styled from "styled-components";
import { SectionTitle } from "../../components/titles/SectionTitle.tsx";
import { AsideTitle } from "../../components/titles/AsideTitle.tsx";
import { Rating } from "../../components/rating/Rating.tsx";
import { UserCard } from "../../components/rating/UserCard.tsx";
import userImg1 from "../../shared/assets/images/recomendations/user1.jpg";
import userImg2 from "../../shared/assets/images/recomendations/user2.jpg";
import userImg3 from "../../shared/assets/images/recomendations/user3.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';



// Тип для данных рекомендации
interface RecommendationData {
    id: number;
    rating: 1 | 2 | 3 | 4 | 5;
    title: string;
    description: string;
    userName: string;
    userProfession: string;
    userImage: string;
}

const recommendationsData: RecommendationData[] = [
    {
        id: 1,
        rating: 5,
        title: "Great Quality!",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a rna viverra morbi. Morbi donrna viverra morbi. Morbi don urna viverra morbi. Morbi donec amet",
        userName: "John Doe",
        userProfession: "Frontend Developer",
        userImage: userImg1
    },
    {
        id: 2,
        rating: 4,
        title: "Excellent Service",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        userName: "Jane Smith",
        userProfession: "UI/UX Designer",
        userImage: userImg2
    },
    {
        id: 3,
        rating: 5,
        title: "Highly Recommended",
        description: "Velit officia consequat duis enim velit mollit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi.",
        userName: "Mike Johnson",
        userProfession: "Fullstack Developer",
        userImage: userImg3
    },
    {
        id: 4,
        rating: 3,
        title: "Good Experience",
        description: "Consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Velit officia consequat duis enim velit mollit.",
        userName: "Sarah Wilson",
        userProfession: "Product Manager",
        userImage: userImg1
    }
];

export const Recommendations = () => {
    return (
        <SectionWrapper>
            <SectionTitle as={"h2"}>Recommendations</SectionTitle>
            <Description>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. lorem ipsum
            </Description>

            <SliderContainer>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        // 0px и выше: 1 слайд
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        // 768px и выше: 2 слайда
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        // 1024px и выше: 3 слайда
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    }}
                    loop={true}
                    watchOverflow={true}
                >
                    {recommendationsData.map((recommendation) => (
                        <SwiperSlide key={recommendation.id}>
                            <SlideContent>
                                <ServicesItem>
                                    <Rating value={recommendation.rating} />
                                    <AsideTitle>{recommendation.title}</AsideTitle>
                                    <CardDescription>{recommendation.description}</CardDescription>
                                    <UserCard
                                        name={recommendation.userName}
                                        profession={recommendation.userProfession}
                                        image={recommendation.userImage}
                                    />
                                </ServicesItem>
                            </SlideContent>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </SliderContainer>
        </SectionWrapper>
    );
};

const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: ${({theme}) => theme.spacing.md};
    padding: 0 20px;
    overflow: hidden;
    max-width: 970px;
    margin: 0 auto;
`

const Description = styled.p`
    max-width: 430px;
    text-align: center;
    color: ${(props) => props.theme.colors.text.primary};
`

const CardDescription = styled.p`
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${(props) => props.theme.colors.text.primary};
`

const SliderContainer = styled.div`
    width: 100%;
    position: relative;
    padding: 20px 0 40px;

    .swiper {
        width: 100%;
    }

    .swiper-slide {
        height: auto;
        display: flex;
        justify-content: center;
    }

    .swiper-pagination {
        position: relative;
        bottom: 0;
        margin-top: 30px;
    }

    .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        background: ${({theme}) => theme.colors.border};
        opacity: 0.6;
        transition: all 0.3s ease;

        &:hover {
            opacity: 1;
        }
    }

    .swiper-pagination-bullet-active {
        background: ${({theme}) => theme.colors.primary};
        opacity: 1;
        transform: scale(1.2);
    }
`

const SlideContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

const ServicesItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 25px;
    gap: 20px;
    background: ${({theme}) => theme.colors.bgMain};
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    height: 100%;
    width: 100%;
    max-width: 350px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-sizing: border-box;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }
`

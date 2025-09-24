import styled from "styled-components";
import { SectionTitle } from "../../components/titles/SectionTitle.tsx";
import { AsideTitle } from "../../components/titles/AsideTitle.tsx";
import { Rating } from "../../components/rating/Rating.tsx";
import { UserCard } from "../../components/rating/UserCard.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { recommendationsData } from "../../shared/mocks/recomentationData.ts";

export const Recommendations = () => {
    return (
        <Container>
            <SectionTitle as="h2">Recommendations</SectionTitle>
            <Description>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. lorem ipsum
            </Description>

            <SliderWrapper>
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    breakpoints={{
                        1280: { slidesPerView: 3, spaceBetween: 20 },
                        1024: { slidesPerView: 2, spaceBetween: 20 },
                        0: { slidesPerView: 1, spaceBetween: 10 },
                    }}
                >
                    {recommendationsData.map((recommendation) => (
                        <SwiperSlide key={recommendation.id}>
                            <SlideContent>
                                <ServicesItem>
                                    <Rating value={recommendation.rating} />
                                    <AsideTitle>{recommendation.title}</AsideTitle>
                                    <CardDescription>
                                        {recommendation.description}
                                    </CardDescription>
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
            </SliderWrapper>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
    box-sizing: border-box;

    ${({ theme }) => theme.media.tablet} {
        padding: 0 ${({ theme }) => theme.spacing.sm};
    }
`;

const Description = styled.p`
    max-width: 430px;
    text-align: center;
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0 auto ${({ theme }) => theme.spacing.lg};
`;

const CardDescription = styled.p`
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0;
`;

const SliderWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;

  .swiper {
    width: 100%;
    overflow: hidden;
    cursor: grab;

    &:active {
      cursor: grabbing;
    }
  }

  .swiper-wrapper {
    align-items: stretch;
  }

  .swiper-slide {
    height: auto;
    display: flex;
    justify-content: center;
    transition: opacity ${({ theme }) => theme.transition};

    &:not(.swiper-slide-active) {
      opacity: 0.9;

      ${({ theme }) => theme.media.tablet} {
        opacity: 1;
      }
    }

    &.swiper-slide-active {
      opacity: 1;
    }
  }

  .swiper-pagination {
    position: relative;
    bottom: 0;
    margin-top: ${({ theme }) => theme.spacing.md};
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.colors.border};
    opacity: 0.6;
    transition: all ${({ theme }) => theme.transition};

    &:hover {
      opacity: 1;
    }
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.primary};
    opacity: 1;
    transform: scale(1.3);
  }
`;

const SlideContent = styled.div`
    display: flex;
    width: 100%;
    height: auto; /* не фиксируем высоту */
    justify-content: stretch;
    align-items: stretch;
    box-sizing: border-box;
    padding:${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xs} ;
`;


const ServicesItem = styled.div`
    flex: 1;
    width: 100%;
    min-width: 260px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    padding: ${({ theme }) => theme.spacing.lg};
    gap: ${({ theme }) => theme.spacing.md};
    background: ${({ theme }) => theme.colors.bgMain};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: ${({ theme }) => theme.shadows.md};
    transition: transform ${({ theme }) => theme.transition},
    box-shadow ${({ theme }) => theme.transition};
    box-sizing: border-box;

    height: 100%;

    .swiper-slide-active & {
        transform: translateY(-5px) scale(1.02);
    }

    ${({ theme }) => theme.media.tablet} {
        padding: ${({ theme }) => theme.spacing.md};
    }
`;

import userImg1 from "../assets/images/recomendations/user1.jpg";
import userImg2 from "../assets/images/recomendations/user2.jpg";
import userImg3 from "../assets/images/recomendations/user3.jpg";

interface RecommendationData {
    id: number;
    rating: 1 | 2 | 3 | 4 | 5;
    title: string;
    description: string;
    userName: string;
    userProfession: string;
    userImage: string;
}

export const recommendationsData: RecommendationData[] = [
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

import Layout from "../../Components/LayOut";
import DetailedCard from "../../Components/DetailedCard";

const MainPage = () => {
    return (
        <Layout nickname="Vitalii" id={1}>
            <div>main page</div>
            <DetailedCard
                userName="Vitalii"
                userId={1}
                imgUrl="https://focus.ua/static/storage/thumbs/920x465/7/62/05c0d279-0c7aedca9d9fb6297e0cb2a08e41d627.jpg?v=1230_1"
                likes={10}
                isLikedByYou={true}
                comments={[
                    { text: "awesome", nickname: "Fred" },
                    { text: "nice)", nickname: "Lisa" },
                    { text: "wow!", nickname: "Carl" },
                    { text: "awesome", nickname: "Fred" },
                    { text: "cool!!!", nickname: "Mark" },
                    { text: "awesome", nickname: "Fred" }
                ]} />

        </Layout>

    )
}

export default MainPage;
import { useState } from "react";
import styled from "styled-components";

function Komisaris() {
  const [activeItem, setActiveItem] = useState(1);

  const data = [
      {
          id: 1,
          url: "/tim/komisaris-utama.jpg",
          name: "Bugi Riagandhy",
          topicList: 'Komisaris Utama',
          shortName: "Komisaris Utama",
      },
      {
          id: 2,
          url: "/tim/komisaris.jpg",
          name: "Dinoor Susatijo",
          topicList: 'Komisaris',
          shortName: "Komisaris",
      },

  ];


    const handleHover = (id) => {
        if (activeItem === id) {
            return;
        }
        setActiveItem(id);
    };

    const handleHoverLeave = () => {
        if (activeItem === 1) {
            return;
        }
        setActiveItem(1);
    };

    return (
        <>
        <AppContainer className="mx-auto rounded-3xl mb-8">
            <Wrapper className="flex items-center justify-center min-h-screen">
                <ContainerWrapper className="">
                    <First>
                        <TextWrapper>
                        <Text className="text-[52px] text-primary-100 ml-6 leading-tight">Dewan</Text>
                            <Text className="text-[52px] text-primary-100 ml-6 leading-tight">Komisaris</Text>
                        </TextWrapper>
                    </First>
                    <Container className="main px-10">
                        {data.map((o) => (
                            <ItemWrapper key={o.id}
                                onMouseOver={() => handleHover(o.id)}
                                onMouseLeave={() => handleHoverLeave(o.id)}
                                isActive={o.id === activeItem}
                            >
                                <Item
                                    style={{ backgroundImage: `url(${o.url})` }}
                                    isActive={o.id === activeItem}
                                >
                                    <ContentWrap1
                                        isActive={o.id === activeItem}
                                        isFirst={o.id === 1}
                                    >
                                        <CourseFullname>{o.name}</CourseFullname>
                                        <TopicListWrapper>
                                            <TopicItems>{o.topicList}</TopicItems>
                                        </TopicListWrapper>
                                    </ContentWrap1>
                                    <ContentWrap2
                                        isActive={o.id === activeItem}
                                        isFirst={o.id === 1}
                                    >
                                        <ShortName>{o.shortName}</ShortName>
                                    </ContentWrap2>
                                </Item>
                            </ItemWrapper>
                        ))}
                    </Container>{" "}
                </ContainerWrapper>
            </Wrapper>
        </AppContainer>
    </>
    );
}

export default Komisaris;

const AppContainer = styled.div`
  position: relative;
  width: 97%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcfbfb;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 1200px;
`;

const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const First = styled.div`
  font-size: 40px;
  position: relative;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
  min-width: 540px;
  max-width: 800px;
  width: calc(100% - 100px);
  height: 600px;
`;
const ItemWrapper = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 150px;
  cursor: pointer;
  border-radius: 20px;
  padding: 0 20px;
  flex-grow: ${({ isActive }) => (isActive ? 4 : 1)};
  transition: all 0.6s ease;
`;

const Item = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-position: top;
  background-size: auto ${({ isActive }) => (isActive ? "120%" : "100%")};
  border-radius: 20px;
  transition: all 0.6s ease;
  overflow: hidden;
`;

const TextWrapper = styled.div`
  line-height: 80px;
  font-size: 80px;
  margin-top: 90px;
`;

const Text = styled.div`
  font-weight: 600;
`;

const ContentWrap1 = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 80px;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  padding: 0 40px 0 30px;
  transition: all 0.6s ease;
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
`;

const CourseFullname = styled.div`
  font-size: 34px;
  color: #fff;
  font-weight: 600;
  word-break: keep-all;
  height: 100%;
  width: 10vw;
`;
const TopicListWrapper = styled.div`
  text-align: center;
  color: #fff;
`;
const TopicItems = styled.div`
  font-size: 34px;
  color: #fff;
  font-weight: 500;
  word-break: keep-all;
  height: 100%;
  width: 10vw;
`;

const ContentWrap2 = styled.div`
  width: 100px;
  height: 120px;
  background-color: #1e1e2f;
  color: #fff;
  position: absolute;
  left: 0;
  bottom: 80px;
  z-index: 1;
  transition: all 0.6s ease;
  opacity: ${({ isActive }) => (isActive ? "0" : "1")};
  /* display: ${({ isFirst }) => (isFirst ? "none" : "block")}; */
`;
const ShortName = styled.div`
  font-size: 34px;
  transform: rotate(-90deg);
  font-weight: 500;
`;

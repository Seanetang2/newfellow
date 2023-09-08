import styled  from "styled-components";
import { BsFillTriangleFill } from "react-icons/bs";
import { useRef, useEffect, useState } from "react";

const Hero = () => {

  const [Days, setDays] = useState(0)
  const [Hours, setHours] = useState(0)
  const [Seconds, setSeconds] = useState(0)
  const [Minuites, setMinuites] = useState(0)

  useEffect(() =>{
    const Target = new Date("9/9/2023 11:59:59")

    const Interval = setInterval(() =>{
        const now = new Date()
        const difference =Target.getTime() - now.getTime() 

        const d = Math.floor(difference / (1000 * 60 * 60 * 24))
        setDays(d)

        const h = Math.floor((difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
        setHours(h)

        const m = Math.floor((difference % (1000 * 60 * 60 ) / (1000 * 60 )))
        setMinuites(m)
        
        const s = Math.floor((difference % (1000 * 60  ) / (1000)))
        setSeconds(s)
    }, 1000 ) 
  }, [])

  const Dev: string[] = [
    "background-image: linear-gradient(to right, darkblue, blue);-webkit-text-fill-color: transparent;-webkit-background-clip: text",
    "white",
    "white",
  ];
  const Prev: string[] = [
    "white",
    "background-image: linear-gradient(to right, purple, violet);-webkit-text-fill-color: transparent;-webkit-background-clip: text",
    "white",
  ];
  const Shi: string[] = [
    "white",
    "white",
    "background-image: linear-gradient(to right, orangered, orange);-webkit-text-fill-color: transparent;-webkit-background-clip: text",
  ];

  let dev_ref: any = useRef();
  let prev_ref: any = useRef();
  let shi_ref: any = useRef();
  const [count, setCount] = useState(0);

  useEffect(() => {
    dev_ref.current.style = Dev[count % Dev.length];
    prev_ref.current.style = Prev[count % Prev.length];
    shi_ref.current.style = Shi[count % Shi.length];
  });

  useEffect(() => {
    setInterval(() => {
      setCount((el) => el + 1 / 2);
    }, 2000);
  }, []);

  return (
    <div>
      <Container>
        <H>
          <DPS ref={dev_ref}>Develop.</DPS>
          <DPS ref={prev_ref}>Preview.</DPS>
          <DPS ref={shi_ref}>Ship.</DPS>
        </H>
        <WriteUp>
          Vercel's frontend cloud gives developers the frameworks, workflows,
          <br />
          and infrastructure to build a faster, more personalized Web.
        </WriteUp>
        <BtnHolder>
          <Button>
            <BsFillTriangleFill style={{ marginRight: "10px" }} />
            Start Deploying
          </Button>
          <Button1>Get a Demo</Button1>
        </BtnHolder>
        <Dayshold>
        <Daysdiv>
            <Holds>{Days}</Holds>
            <Div>Day</Div>
        </Daysdiv>
        <Daysdiv>
            <Holds>{Hours}</Holds>
            <Div>Hours</Div>
        </Daysdiv>
        <Daysdiv>
            <Holds>{Minuites}</Holds>
            <Div>Minuites</Div>
        </Daysdiv>
        <Daysdiv>
            <Holds>{Seconds}</Holds>
            <Div>Seconds</Div>
        </Daysdiv>
        </Dayshold>
      </Container>
    </div>
  );
};

export default Hero;

const Dayshold = styled.div`
display:flex;
margin-left: 100px;
`

const Div = styled.div``

const Holds = styled.div``

const Daysdiv = styled.div`
color:white;    
margin-right: 100px;
`

const H = styled.div`
  display: flex;
  transition: all 350ms;
`;

const BtnHolder = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button1 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 2px solid white;
  background-color: black;
  font-size: 17px;
  padding: 15px 35px;
  margin-left: 30px;
  border-radius: 10px;
  transition: all 350ms;
  &:hover {
    cursor: pointer;
  }
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: white;
  border: 0;
  font-size: 17px;
  padding: 15px 18px;
  border-radius: 10px;
  transition: all 350ms;
  &:hover {
    cursor: pointer;
  }
`;

const WriteUp = styled.div`
  height: 20vh;
  align-items: center;
  justify-content: center;
  color: grey;
  font-size: 30px;
  display: flex;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const DPS = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: 120px;
  color: white;
  font-weight: 700;
  transition: all 350ms;
  animation: slow 300ms @keyframes slow {
    transition: all 350ms;
  }
  @media screen and (max-width: 768px) {
    font-size: 90px;
    flex-direction: column;
    width: 20%;
    margin: 80px 0px 100px 230px;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
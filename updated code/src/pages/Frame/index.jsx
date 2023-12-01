import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const FramePage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-headlinea items-center justify-start mx-auto pb-9 w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="bg-black-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
            <Text
              className="mb-4 md:ml-[0] ml-[35px] md:mt-0 mt-[11px] sm:text-[32.87px] md:text-[34.87px] text-[36.87px] text-white-A700"
              size="txtJCHEadA3687"
            >
              <span className="text-white-A700 font-headlinea text-left font-normal">
                Blocci
              </span>
              <span className="text-teal-A400 font-headlinea text-left font-normal">
                X
              </span>
            </Text>
            <ul className="flex md:flex-1 md:flex-col flex-row font-roboto md:gap-5 sm:hidden items-start justify-start md:ml-[0] ml-[759px] mr-9 md:mt-0 my-[22px] px-3 w-[28%] md:w-full common-row-list">
              <li>
                <a
                  href="javascript:"
                  className="hover:bg-gray-900 hover:justify-center md:mt-0 mt-0.5 text-[14.93px] text-center hover:text-teal-A400 text-white-A700"
                >
                  <Text size="txtRobotoRegular1493">Insights</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="hover:bg-gray-900 hover:justify-center mb-0.5 md:ml-[0] ml-[60px] text-[14.93px] text-center hover:text-teal-A400 text-white-A700"
                >
                  <Text size="txtRobotoRegular1493">Careers</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="bg-gray-900 flex h-4 items-center justify-center md:ml-[0] ml-[13px] rounded-[3px] text-[10.67px] text-center text-teal-A400 uppercase w-4"
                >
                  <Text size="txtRobotoRegular1067">2</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="hover:bg-gray-900 hover:justify-center md:ml-[0] ml-[51px] text-[14.93px] text-center hover:text-teal-A400 text-white-A700"
                >
                  <Text size="txtRobotoRegular1493">Get in Touch</Text>
                </a>
              </li>
            </ul>
          </header>
          <div className="bg-black-900 font-poppins  md:h-[458px] h-[662px]  mt-[29px] mx-auto pt-[75px]  relative rounded-[22px] w-full">
            {/* <div className="absolute bottom-[0] md:h-[429px] h-[586px] sm:h-[976px] right-[0] w-[93%] md:w-full"> */}
            <div className=" ">
              <div className=" banner ">
                <div className="w-[55%] flex flex-col  sm:w-full md:w-full">
                  <div className="  flex flex-col font-headlinea items-start justify-start     pt-[67px] ">
                    <Text
                      className="sm:text-[30px]  md:text-[40px] text-[70px] font-bold  text-teal-A400"
                      size="txtJCHEadA10726"
                    >
                      WEB3
                    </Text>

                    <Text className="text-[70px] sm:text-[30px] md:text-[40px]   ">
                      <h1 className="text-stroke tracking-tighter font-bold text-slate-900"> DEVELOPMENT</h1>

                    </Text>

                  </div>
                  <Text
                    className=" mt-16  leading-[35.00px]  sm:text-[17.32px] md:text-[19.32px] text-[21.32px] text-white-A700"
                    size="txtPoppinsRegular2132"
                  >
                    <>
                      BlocciX is a Premier Web3 Development <br />
                      Company for Blockchain, NFTs, DeFi, Gaming and More.{" "}
                      <br />
                      Our Expert Team Delivers Innovative Solutions.
                    </>
                  </Text>
                  <div className=" flex flex-row sm:flex-col md:flex-col gap-10 mt-10">
                    <Button className="bottom-[11%] cursor-pointer font-bold left-[0] min-w-[149px] rounded-md text-[17.12px] text-center">
                      Let’s Talk
                    </Button>
                    <div className=" bottom-[11%] left-48">
                      <button className="min-w-[149px] w-full rounded-md text-[17.12px] text-center py-3 px-10 hover:bg-[#00ffa7] hover:text-black-900 duration-700 ease-out border border-[#00ffa7] text-[#00ffa7] font-semibold">Schedule a Meeting</button>
                    </div>

                  </div>
                </div>
               
                <div className="-ml-10 sm:hidden  sm:w-full md:w-full w-[45%]  flex flex-col items-end justify-start  pl-12 sm:pl-5 right-[0] ">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end w-full">
                    <div className="flex  flex-col  gap-[100px] justify-start  mt-[22px] w-[37%] sm:w-full">
                      <Img
                        className=" md:ml-[0] ml-[69px] object-cover w-[92%]  "
                        src="images/img_shapes3dimage.png"
                        alt="shapes3dimage"
                      />
                      <Img
                        className="h-[186px] md:h-auto mr-[17px] object-cover w-[92%] sm:w-full"
                        src="images/img_shapes3dimage_186x173.png"
                        alt="shapes3dimage_One"
                      />
                    </div>
                    <Img
                      className="sm:flex-1 h-[187px] md:h-auto ml-4 sm:ml-[0] sm:mt-0 mt-[102px] object-cover w-[30%] sm:w-full"
                      src="images/img_shapes3dimage_187x152.png"
                      alt="shapes3dimage_Two"
                    />
                    <div className="flex sm:flex-1 flex-col md:gap-10 gap-28 justify-start ml-3.5 sm:ml-[0] w-[29%] sm:w-full">
                      <Img
                        className="h-[124px] md:h-auto object-cover w-full"
                        src="images/img_shapes3dimage_124x147.png"
                        alt="shapes3dimage_Three"
                      />
                      <Img
                        className="h-[107px] md:h-auto md:ml-[0] ml-[7px] object-cover w-[51%]"
                        src="images/img_shapes3dimage_107x74.png"
                        alt="shapes3dimage_Four"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className=""
                src="images/img_rectangle1.png"
                alt="rectangleOne"
              />


              {/* <Input
                name="frameSeven"
                placeholder="Schedule a Meeting"
                className="font-bold p-0 placeholder:text-teal-A400 text-[17.12px] text-left w-full"
                wrapClassName="bottom-[11%] flex left-[16%] mb-[66px] ml-[180px] w-1/4"
                prefix={
                  <div className="h-[15px] mt-0.5 mb-2 mr-[17px] w-[15px] outline-teal-A400 outline-[0.5px] outline top-[0] bottom-[1%] right-[2%] absolute">
                    <Img
                      className="h-[15px] absolute my-auto"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                  </div>
                }
                shape="round"
                color="teal_A400"
                size="xs"
                variant="outline"
              ></Input> */}
            </div>
          </div>
          <div className="flex flex-col   mt-0 sm:mt-64 md:mt-[800px] gap-[7px] items-center justify-start  md:px-5">
            <Text
              className="sm:text-[37.2px] md:text-[43.2px] text-[51.2px] text-white-A700 uppercase"
              size="txtPoppinsSemiBold512"
            >
              <span className="text-white-A700 font-headlinea text-left font-normal">
                Our{" "}
              </span>
              <span className="text-teal-A400 font-headlinea text-left font-normal">
                Services
              </span>
            </Text>
            <Text
              className="sm:text-[19.35px] sm:text-center md:text-center  md:text-[21.35px] text-[23.35px] text-white-A700"
              size="txtPoppinsRegular2335"
            >
              End-To-End WEB3 Product Design, Development & Deployment
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row font-poppins gap-[23px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1101px] mt-[141px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="h-[351px] relative rounded-[17px] shadow-bs w-full">
              <Img
                className="h-[351px] m-auto object-cover rounded-[17px] w-[351px]"
                src="images/img_image7.png"
                alt="imageSeven"
              />
              <div className="absolute bg-black-900_96 bottom-[4%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[7px] rounded-md shadow-bs1 w-[92%]">
                <div className="flex flex-row gap-[13px] items-center justify-between w-[97%] md:w-full">
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-[18.62px] text-white-A700"
                      size="txtPoppinsBold1862"
                    >
                      Full Stack MVP Development
                    </Text>
                    <Text
                      className="text-[11.15px] text-white-A700"
                      size="txtPoppinsRegular1115"
                    >
                      <>
                        Lorem ipsum dolor sit amet, consectetur
                        <br />
                        adipiscing elit, sed do eiusmod tempork
                      </>
                    </Text>
                  </div>
                  <Img
                    className="h-[22px]"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
            <div className="h-[351px] relative rounded-[17px] shadow-bs w-full">
              <Img
                className="h-[351px] m-auto object-cover rounded-[17px] w-[351px]"
                src="images/img_image7_351x351.png"
                alt="imageSeven"
              />
              <div className="absolute bg-black-900_96 bottom-[4%] flex flex-col inset-x-[0] items-center justify-start mx-auto p-1.5 rounded-md shadow-bs1 w-[92%]">
                <div className="flex flex-row items-center justify-between w-[96%] md:w-full">
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-[18.62px] text-white-A700"
                      size="txtPoppinsBold1862"
                    >
                      Professional NFT Art
                    </Text>
                    <Text
                      className="mt-[3px] text-[11.15px] text-white-A700"
                      size="txtPoppinsRegular1115"
                    >
                      <>
                        Lorem ipsum dolor sit amet, consectetur
                        <br />
                        adipiscing elit, sed do eiusmod tempork
                      </>
                    </Text>
                  </div>
                  <Img
                    className="h-[22px]"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
            <div className="h-[351px] relative rounded-[17px] shadow-bs w-full">
              <Img
                className="h-[351px] m-auto object-cover rounded-[17px] w-[351px]"
                src="images/img_image7_1.png"
                alt="imageSeven"
              />
              <div className="absolute bg-black-900_96 bottom-[4%] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[7px] rounded-md shadow-bs1 w-[92%]">
                <div className="flex flex-row items-center justify-start w-[97%] md:w-full">
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-[18.62px] text-white-A700"
                      size="txtPoppinsBold1862"
                    >
                      Smart Contract Development
                    </Text>
                    <Text
                      className="text-[11.15px] text-white-A700"
                      size="txtPoppinsRegular1115"
                    >
                      <>
                        Lorem ipsum dolor sit amet, consectetur
                        <br />
                        adipiscing elit, sed do eiusmod tempork
                      </>
                    </Text>
                  </div>
                  <Img
                    className="h-[22px] ml-0.5"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
          </List>
          <div className="flex flex-col gap-[9px] items-center justify-start mt-[135px] md:px-5">
            <Text
              className="sm:text-[37.2px] md:text-[43.2px] text-[51.2px] text-white-A700 uppercase"
              size="txtPoppinsSemiBold512"
            >
              <span className="text-white-A700 font-headlinea text-left font-normal">
                Our{" "}
              </span>
              <span className="text-teal-A400 font-headlinea text-left font-normal">
                process
              </span>
            </Text>
            <Text
              className="leading-[25.00px] sm:text-[19.35px] md:text-[21.35px] text-[23.35px] text-center text-white-A700"
              size="txtPoppinsRegular2335"
            >
              <>
                Our unwavering commitment to quality is evident in every step{" "}
                <br />
                of our process, from consultant tion to preject delivery
              </>
            </Text>
          </div>
          <div className="flex flex-col font-headlinea md:gap-10 gap-[135px] items-center justify-start max-w-[1060px] mt-[149px] mx-auto md:px-5 w-full">
            <div className="flex justify-between sm:justify-center md:justify-center gap-10 flex-wrap  w-full">
              <div className="flex flex-col justify-center items-center gap-5 ">
                <Button
                  className="flex h-[50px] items-center justify-center w-[50px]"
                  shape="round"
                  size="xs"
                >
                  <Img src="images/img_mail.svg" alt="mail" />
                </Button>
                <Text
                  className="sm:text-[25.4px] md:text-[25.4px] text-[30.4px] text-white-A700 uppercase"
                  size="txtJCHEadA384"
                >
                  definition
                </Text>
                <Text
                  className="leading-[23.00px] mt-3 sm:text-[17.33px] md:text-[19.33px] text-[21.33px] text-center text-white-A700"
                  size="txtPoppinsRegular2133"
                >
                  <>
                    Lorem ipsum dolor <br />
                    sit amet, consectetur <br />
                    adipiscing elit, sed <br />
                    do eiusmod tempork
                  </>
                </Text>
              </div>
              <div className="flex flex-col justify-center items-center gap-5 ">
                <Button
                  className="flex h-[50px] items-center justify-center w-[50px]"
                  shape="round"
                  size="xs"
                >
                  <Img src="images/img_mail.svg" alt="mail" />
                </Button>
                <Text
                  className="sm:text-[25.4px] md:text-[25.4px] text-[30.4px] text-white-A700 uppercase"
                  size="txtJCHEadA384"
                >
                  design
                </Text>
                <Text
                  className="leading-[23.00px] mt-3 sm:text-[17.33px] md:text-[19.33px] text-[21.33px] text-center text-white-A700"
                  size="txtPoppinsRegular2133"
                >
                  <>
                    Lorem ipsum dolor <br />
                    sit amet, consectetur <br />
                    adipiscing elit, sed <br />
                    do eiusmod tempork
                  </>
                </Text>
              </div>
              <div className="flex flex-col justify-center items-center gap-5 ">
                <Button
                  className="flex h-[50px] items-center justify-center rounded-[13px] w-[50px]"
                  shape="round"
                  size="sm"
                >
                  <Img
                    src="images/img_thumbsup_black_900.svg"
                    alt="thumbsup_One"
                  />
                </Button>
                <Text
                  className="sm:text-[25.4px] md:text-[25.4px] text-[30.4px] text-white-A700 uppercase"
                  size="txtJCHEadA384"
                >
                  development
                </Text>
                <Text
                  className="leading-[23.00px] mt-3 sm:text-[17.33px] md:text-[19.33px] text-[21.33px] text-center text-white-A700"
                  size="txtPoppinsRegular2133"
                >
                  <>
                    Lorem ipsum dolor <br />
                    sit amet, consectetur <br />
                    adipiscing elit, sed <br />
                    do eiusmod tempork
                  </>
                </Text>
              </div>
              <div className="flex flex-col justify-center items-center gap-5 ">
                <Button
                  className="flex h-[50px] items-center justify-center rounded-[13px] w-[50px]"
                  shape="round"
                >
                  <Img src="images/img_checkmark.svg" alt="checkmark" />
                </Button>
                <Text
                  className="sm:text-[25.4px] md:text-[25.4px] text-[30.4px] text-white-A700 uppercase"
                  size="txtJCHEadA384"
                >
                  development
                </Text>
                <Text
                  className="leading-[23.00px] mt-3 sm:text-[17.33px] md:text-[19.33px] text-[21.33px] text-center text-white-A700"
                  size="txtPoppinsRegular2133"
                >
                  <>
                    Lorem ipsum dolor <br />
                    sit amet, consectetur <br />
                    adipiscing elit, sed <br />
                    do eiusmod tempork
                  </>
                </Text>
              </div>



              {/* <div className="flex flex-col items-center justify-start w-full">

                <div className="flex flex-row items-center justify-between w-[83%] md:w-full">
                  <Button
                    className="flex h-[50px] items-center justify-center w-[50px]"
                    shape="round"
                    size="xs"
                  >
                    <Img src="images/img_mail.svg" alt="mail" />
                  </Button>
                  <Button
                    className="flex h-[50px] items-center justify-center w-[50px]"
                    shape="round"
                    size="sm"
                  >
                    <Img
                      className="h-[27px]"
                      src="images/img_thumbsup.svg"
                      alt="thumbsup"
                    />
                  </Button>
                  <Button
                    className="flex h-[50px] items-center justify-center rounded-[13px] w-[50px]"
                    shape="round"
                    size="sm"
                  >
                    <Img
                      src="images/img_thumbsup_black_900.svg"
                      alt="thumbsup_One"
                    />
                  </Button>
                  <Button
                    className="flex h-[50px] items-center justify-center rounded-[13px] w-[50px]"
                    shape="round"
                  >
                    <Img src="images/img_checkmark.svg" alt="checkmark" />
                  </Button>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[25px] w-[94%] md:w-full">
                  <Text
                    className="sm:text-[34.4px] md:text-[36.4px] text-[38.4px] text-white-A700 uppercase"
                    size="txtJCHEadA384"
                  >
                    definition
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[159px] sm:text-[34.4px] md:text-[36.4px] text-[38.4px] text-white-A700 uppercase"
                    size="txtJCHEadA384"
                  >
                    design
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[136px] sm:text-[34.4px] md:text-[36.4px] text-[38.4px] text-white-A700 uppercase"
                    size="txtJCHEadA384"
                  >
                    development
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[98px] sm:text-[34.4px] md:text-[36.4px] text-[38.4px] text-white-A700 uppercase"
                    size="txtJCHEadA384"
                  >
                    deployment
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row font-poppins sm:gap-10 items-center justify-between mt-7 w-full">
                  <Text
                    className="leading-[23.00px] sm:text-[17.33px] md:text-[19.33px] text-[21.33px] text-center text-white-A700"
                    size="txtPoppinsRegular2133"
                  >
                    <>
                      Lorem ipsum dolor <br />
                      sit amet, consectetur <br />
                      adipiscing elit, sed <br />
                      do eiusmod tempork
                    </>
                  </Text>
                  <Text
                    className="leading-[23.00px] sm:text-[17.33px] md:text-[19.33px] text-[21.33px] text-center text-white-A700"
                    size="txtPoppinsRegular2133"
                  >
                    <>
                      Lorem ipsum dolor <br />
                      sit amet, consectetur <br />
                      adipiscing elit, sed <br />
                      do eiusmod tempork
                    </>
                  </Text>
                  <Text
                    className="leading-[23.00px] sm:text-[17.33px] md:text-[19.33px] text-[21.33px] text-center text-white-A700"
                    size="txtPoppinsRegular2133"
                  >
                    <>
                      Lorem ipsum dolor <br />
                      sit amet, consectetur <br />
                      adipiscing elit, sed <br />
                      do eiusmod tempork
                    </>
                  </Text>
                  <Text
                    className="leading-[23.00px] sm:text-[17.33px] md:text-[19.33px] text-[21.33px] text-center text-white-A700"
                    size="txtPoppinsRegular2133"
                  >
                    <>
                      Lorem ipsum dolor <br />
                      sit amet, consectetur <br />
                      adipiscing elit, sed <br />
                      do eiusmod tempork
                    </>
                  </Text>
                </div>
              </div> */}
            </div>
            <div className="flex mt-20 flex-col gap-[5px] items-center justify-start px-10 sm:px-5">
              <Text
                className="sm:text-[37.2px] text-center md:text-[43.2px] text-[51.2px] text-white-A700 uppercase"
                size="txtPoppinsSemiBold512"
              >
                <span className="text-white-A700 font-headlinea text-left font-normal">
                  Delivering{" "}
                </span>
                <span className="text-teal-A400 font-headlinea text-left font-normal">
                  Each Milestone
                </span>
              </Text>
              <Text
                className="sm:text-[19.35px] md:text-[21.35px] text-[23.35px] text-center text-white-A700"
                size="txtPoppinsRegular2335"
              >
                <>
                  No matter your budget, timeline, or needs, we&#39;ll craft a
                  custom development <br />
                  package that fits seamlessly into your Web3 project journey{" "}
                  <br />
                  and propels you towards success.
                </>
              </Text>
            </div>
          </div>
          <div className="flex  flex-wrap  md:gap-5 justify-center max-w-[968px] mt-[146px] mx-auto md:px-5 w-full">
            <div className="border  border-solid border-teal-A400 flex  flex-col items-center text-center p-3 rounded-[13px] min-w-[250px] sm:w-full ">
              <div className="flex flex-col items-start justify-start mb-[17px] mt-3.5 w-[97%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[3px] sm:text-[34.4px] md:text-[36.4px] text-[38.4px] text-white-A700 uppercase"
                  size="txtJCHEadA384"
                >
                  poc
                </Text>
                <Input
                  name="groupEight"
                  placeholder="Proof Of Concept"
                  className="font-poppins p-0 placeholder:text-white-A700 sm:pr-5 text-[12.55px] text-left w-full"
                  wrapClassName="mt-3 pl-[3px] pr-[35px] w-[98%]"
                ></Input>
                <Text
                  className="md:ml-[0] ml-[3px] mt-3 text-[12.55px] text-gray-500"
                  size="txtPoppinsRegular1255"
                >
                  <>
                    Demonstrate the feasibility or potential <br />
                    value of your idea or approach to validate <br />
                    it before committing significant resources <br />
                    to its development.
                  </>
                </Text>
                <Line className="bg-gray-900_01 h-px mt-[9px] w-[98%]" />
                <div className="flex flex-row font-poppins gap-2 items-start justify-start ml-1.5 md:ml-[0] mt-7 w-[73%] md:w-full">
                  <div className="bg-teal-A400 h-[9px] mb-[18px] mt-[3px] w-[9px]"></div>
                  <Text
                    className="text-[12.55px] text-gray-500"
                    size="txtPoppinsRegular1255"
                  >
                    <>
                      Suitable for early-stage and <br />
                      self-funded teams
                    </>
                  </Text>
                </div>
                <div className="flex flex-row font-poppins gap-2 items-start justify-start ml-1.5 md:ml-[0] mt-[13px] w-[73%] md:w-full">
                  <div className="bg-teal-A400 h-[9px] mb-[18px] mt-[3px] w-[9px]"></div>
                  <Text
                    className="text-[12.55px] text-gray-500"
                    size="txtPoppinsRegular1255"
                  >
                    <>
                      Suitable for early-stage and <br />
                      self-funded teams
                    </>
                  </Text>
                </div>
                <div className="flex flex-row font-poppins gap-2 items-start justify-start ml-1.5 md:ml-[0] mt-[13px] w-[73%] md:w-full">
                  <div className="bg-teal-A400 h-[9px] mb-[18px] mt-[3px] w-[9px]"></div>
                  <Text
                    className="text-[12.55px] text-gray-500"
                    size="txtPoppinsRegular1255"
                  >
                    <>
                      Suitable for early-stage and <br />
                      self-funded teams
                    </>
                  </Text>
                </div>
                <Text
                  className="bg-teal-A400 h-[29px] justify-center md:ml-[0] ml-[55px] mt-[30px] sm:px-5 px-[33px] py-0.5 rounded-md text-[17.12px] text-black-900 w-[150px]"
                  size="txtPoppinsBold1712"
                >
                  Let’s Talk
                </Text>
              </div>
            </div>
            <div className="border border-solid border-teal-A400 flex  flex-col items-center justify-start md:ml-[0] ml-[33px] p-3 rounded-[13px]  min-w-[250px] sm:w-full">
              <div className="flex flex-col items-start justify-start mb-[17px] mt-3.5 w-[97%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[3px] sm:text-[34.4px] md:text-[36.4px] text-[38.4px] text-white-A700 uppercase"
                  size="txtJCHEadA384"
                >
                  MVP
                </Text>
                <Input
                  name="groupSix"
                  placeholder="Minimal Viable Product"
                  className="font-poppins p-0 placeholder:text-white-A700 sm:pr-5 text-[12.55px] text-left w-full"
                  wrapClassName="mt-2.5 pl-[3px] pr-[35px] w-[98%]"
                ></Input>
                <Text
                  className="md:ml-[0] ml-[3px] mt-3 text-[12.55px] text-gray-500"
                  size="txtPoppinsRegular1255"
                >
                  <>
                    Demonstrate the feasibility or potential <br />
                    value of your idea or approach to validate <br />
                    it before committing significant resources <br />
                    to its development.
                  </>
                </Text>
                <Line className="bg-gray-900_01 h-px mt-[9px] w-[98%]" />
                <div className="flex flex-row font-poppins gap-2 items-start justify-start ml-1.5 md:ml-[0] mt-7 w-[73%] md:w-full">
                  <div className="bg-teal-A400 h-[9px] mb-[18px] mt-[3px] w-[9px]"></div>
                  <Text
                    className="text-[12.55px] text-gray-500"
                    size="txtPoppinsRegular1255"
                  >
                    <>
                      Suitable for early-stage and <br />
                      self-funded teams
                    </>
                  </Text>
                </div>
                <div className="flex flex-row font-poppins gap-2 items-start justify-start ml-1.5 md:ml-[0] mt-[13px] w-[73%] md:w-full">
                  <div className="bg-teal-A400 h-[9px] mb-[18px] mt-[3px] w-[9px]"></div>
                  <Text
                    className="text-[12.55px] text-gray-500"
                    size="txtPoppinsRegular1255"
                  >
                    <>
                      Suitable for early-stage and <br />
                      self-funded teams
                    </>
                  </Text>
                </div>
                <div className="flex flex-row font-poppins gap-2 items-start justify-start ml-1.5 md:ml-[0] mt-[13px] w-[73%] md:w-full">
                  <div className="bg-teal-A400 h-[9px] mb-[18px] mt-[3px] w-[9px]"></div>
                  <Text
                    className="text-[12.55px] text-gray-500"
                    size="txtPoppinsRegular1255"
                  >
                    <>
                      Suitable for early-stage and <br />
                      self-funded teams
                    </>
                  </Text>
                </div>
                <Text
                  className="bg-teal-A400 h-[29px] justify-center md:ml-[0] ml-[55px] mt-[30px] sm:px-5 px-[33px] py-0.5 rounded-md text-[17.12px] text-black-900 w-[150px]"
                  size="txtPoppinsBold1712"
                >
                  Let’s Talk
                </Text>
              </div>
            </div>
            <div className="border border-solid flex  flex-col items-center justify-start md:ml-[0] ml-[33px] p-3 purple_A700_cyan_A400_f2_border rounded-[13px] min-w-[250px] sm:w-full">
              <div className="flex flex-col items-start justify-start mb-[17px] mt-3.5 w-[97%]  sm:w-full">
                <Text
                  className="md:ml-[0] ml-[3px] sm:text-[34.4px] md:text-[36.4px] text-[38.4px] text-white-A700 uppercase"
                  size="txtJCHEadA384"
                >
                  production
                </Text>
                <Line className="bg-gray-900_01 h-px mt-12 w-[98%]" />
                <Text
                  className="md:ml-[0] ml-[3px] mt-3 text-[12.55px] text-gray-500"
                  size="txtPoppinsRegular1255"
                >
                  <>
                    Demonstrate the feasibility or potential <br />
                    value of your idea or approach to validate <br />
                    it before committing significant resources <br />
                    to its development.
                  </>
                </Text>
                <Line className="bg-gray-900_01 h-px mt-[9px] w-[98%]" />
                <div className="flex flex-row font-poppins gap-2 items-start justify-start ml-1.5 md:ml-[0] mt-7 w-[73%] md:w-full">
                  <div className="bg-teal-A400 h-[9px] mb-[18px] mt-[3px] w-[9px]"></div>
                  <Text
                    className="text-[12.55px] text-gray-500"
                    size="txtPoppinsRegular1255"
                  >
                    <>
                      Suitable for early-stage and <br />
                      self-funded teams
                    </>
                  </Text>
                </div>
                <div className="flex flex-row font-poppins gap-2 items-start justify-start ml-1.5 md:ml-[0] mt-[13px] w-[73%] md:w-full">
                  <div className="bg-teal-A400 h-[9px] mb-[18px] mt-[3px] w-[9px]"></div>
                  <Text
                    className="text-[12.55px] text-gray-500"
                    size="txtPoppinsRegular1255"
                  >
                    <>
                      Suitable for early-stage and <br />
                      self-funded teams
                    </>
                  </Text>
                </div>
                <div className="flex flex-row font-poppins gap-2 items-start justify-start ml-1.5 md:ml-[0] mt-[13px] w-[73%] md:w-full">
                  <div className="bg-teal-A400 h-[9px] mb-[18px] mt-[3px] w-[9px]"></div>
                  <Text
                    className="text-[12.55px] text-gray-500"
                    size="txtPoppinsRegular1255"
                  >
                    <>
                      Suitable for early-stage and <br />
                      self-funded teams
                    </>
                  </Text>
                </div>
                <Text
                  className="bg-teal-A400 h-[29px] justify-center md:ml-[0] ml-[55px] mt-[30px] sm:px-5 px-[33px] py-0.5 rounded-md text-[17.12px] text-black-900 w-[150px]"
                  size="txtPoppinsBold1712"
                >
                  Let’s Talk
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[22px] items-center justify-start max-w-[926px] mt-[147px] mx-auto md:px-5 px-[33px] w-full">
            <Text
              className="sm:text-[37.2px] md:text-[43.2px] text-[51.2px] text-white-A700 uppercase"
              size="txtJCHEadA512"
            >
              <span className="text-white-A700 font-headlinea text-left font-normal">
                ACROSS ANY{" "}
              </span>
              <span className="text-teal-A400 font-headlinea text-left font-normal">
                STAGE
              </span>
            </Text>
            <Text
              className="leading-[25.00px] sm:text-[19.35px] md:text-[21.35px] text-[23.35px] text-center text-white-A700"
              size="txtPoppinsRegular2335"
            >
              <>
                We don&#39;t just code, we&#39;re a one-stop-shop for product
                development! <br />
                From consulting on direction, to running workshops, designing
                interfaces, <br />
                and architecting solutions - we&#39;ve got you covered.
              </>
            </Text>
          </div>
          <div className="flex flex-col font-headlinea items-center justify-start mt-[154px] md:px-5 w-1/2 md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-[26px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="border border-solid border-teal-A400 flex flex-1 flex-row gap-5 items-center justify-start p-5 rounded-[13px] w-full">
                  <Img
                    className="h-16 ml-1 w-16"
                    src="images/img_designsvgrepocom.svg"
                    alt="designsvgrepoco"
                  />
                  <Text
                    className="sm:text-[21.6px] md:text-[23.6px] text-[25.6px] text-white-A700 uppercase"
                    size="txtJCHEadA256"
                  >
                    UI/ux design
                  </Text>
                </div>
                <div className="border border-solid border-teal-A400 flex flex-1 flex-row gap-6 items-center justify-start p-[11px] rounded-[13px] w-full">
                  <Img
                    className="h-[73px] my-[3px] w-[73px]"
                    src="images/img_bag.svg"
                    alt="bag"
                  />
                  <Text
                    className="sm:text-[21.6px] md:text-[23.6px] text-[25.6px] text-white-A700 uppercase"
                    size="txtJCHEadA256"
                  >
                    consulting
                  </Text>
                </div>
                <div className="border border-solid border-teal-A400 flex flex-1 flex-row gap-5 items-center justify-start p-5 rounded-[13px] w-full">
                  <Img
                    className="h-16 ml-1 w-16"
                    src="images/img_designskillssvgrepocom.svg"
                    alt="designskillssvg"
                  />
                  <Text
                    className="sm:text-[21.6px] md:text-[23.6px] text-[25.6px] text-white-A700 uppercase"
                    size="txtJCHEadA256"
                  >
                    architecture
                  </Text>
                </div>
                <div className="border border-solid border-teal-A400 flex flex-1 flex-row gap-[26px] items-center justify-start p-[19px] rounded-[13px] w-full">
                  <Img
                    className="h-[63px] w-[63px]"
                    src="images/img_television.svg"
                    alt="television"
                  />
                  <Text
                    className="sm:text-[21.6px] md:text-[23.6px] text-[25.6px] text-white-A700 uppercase"
                    size="txtJCHEadA256"
                  >
                    development
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[82px] items-center justify-start mt-[164px] w-full">
            <div className="flex flex-col gap-3 items-center justify-start md:px-5">
              <Text
                className="sm:text-[37.2px]  text-center  md:text-[43.2px] text-[51.2px] text-white-A700 uppercase"
                size="txtJCHEadA512"
              >
                <span className="text-white-A700 font-headlinea text-left font-normal">
                  USING THE{" "}
                </span>
                <span className="text-teal-A400 font-headlinea text-left font-normal">
                  LATEST TECHNOLOGIES
                </span>
              </Text>
              <Text
                className="sm:text-[19.35px] md:text-[21.35px] text-[23.35px] text-center text-white-A700"
                size="txtPoppinsRegular2335"
              >
                <>
                  Our development services are platform. <br />
                  language and protocol agnostic - we build where your users are
                </>
              </Text>
            </div>
            <Img
              className="h-[209px] sm:h-auto object-cover w-full"
              src="images/img_screenshot20231123.png"
              alt="screenshot20231"
            />
          </div>
          <div className="flex flex-row-reverse gap-10 sm:flex-col md:flex-col items-center h-[506px] md:h-[641px] max-w-[1196px] mt-36 mx-auto md:px-5 relative w-full">
            <div className=" bg-gray-900_02 flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] rounded-[20px] w-[54%] sm:w-full md:w-full">
              <Img
                className="md:h-auto  object-cover rounded-[20px] w-[70%] sm:w-full "
                src="images/img_image8.png"
                alt="imageEight"
              />
            </div>
            <div className="flex flex-col sm:mt-12 gap-4 items-start justify-start  ">
              <Text
                className="sm:text-[37.2px] sm:text-center md:text-[43.2px] text-[51.2px] text-white-A700 uppercase"
                size="txtJCHEadA512"
              >
                about us
              </Text>
              <Text
                className=" sm:text-[19.35px] md:text-[21.35px] text-[23.35px] text-white-A700"
                size="txtPoppinsRegular2335"
              >
                <>
                  We don&#39;t just code, we&#39;re a one-stop-shop <br />
                  for product development! From consulting <br />
                  on direction, to running workshops, <br />
                  designing interfaces, and architecting <br />
                  solutions - we&#39;ve got you covered.
                </>
              </Text>
            </div>
          </div>
          <div className="flex flex-col font-poppins gap-[47px] items-center justify-start max-w-[968px] mt-[145px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-9 items-center justify-start pb-[3px] w-full">
              <Text
                className="sm:text-[37.2px] md:text-[43.2px] text-[51.2px] text-white-A700 tracking-[-2.05px] uppercase"
                size="txtJCHEadA512"
              >
                want to brainstorm a project? let’s discuss
              </Text>
              <Text
                className="leading-[25.00px] sm:text-[19.35px] md:text-[21.35px] text-[23.35px] text-center text-white-A700"
                size="txtPoppinsRegular2335"
              >
                <>
                  Get it touch to discuss your idea in confidence. Our experts
                  will schedule a call and <br />
                  provide an NDA for your protection
                </>
              </Text>
            </div>
            <Button className="cursor-pointer font-bold min-w-[149px] rounded-md text-[17.12px] text-center">
              Let’s Talk
            </Button>
          </div>
          <div className="bg-black-900 flex flex-row font-poppins items-center justify-start max-w-[1196px] mt-[170px] mx-auto pb-3.5 px-3.5 md:px-5 rounded-[22px] w-full">
            <div className="flex md:flex-col flex-row md:gap-14 items-center justify-between ml-[21px] w-[97%]">
              <div className="md:h-[166px] h-[237px] relative w-[82%] md:w-full">
                <div className="absolute backdrop-opacity-[0.5] bg-teal-A400_89 blur-[363.00px] h-[78px] right-[11%] rounded-[39px] top-[0] w-[56%]"></div>
               <div className="left-[0] sm:text-[32.87px] md:text-[34.87px]">
               <Text
                  className=" text-[36.87px] text-white-A700 top-[12%]"
                  size="txtJCHEadA3687"
                >
                  <span className="text-white-A700 font-headlinea text-left font-normal">
                    Blocci
                  </span>
                  <span className="text-teal-A400 font-headlinea text-left font-normal">
                    X
                  </span>
                </Text>
                <Text
                  className=" bottom-[0] leading-[35.00px] left-[0] text-base text-white-A700"
                  size="txtPoppinsRegular16"
                >
                  <>
                    BlocciX is a Premier Web3 Development <br />
                    Company for Blockchain, NFTs, DeFi, Gaming <br />
                    and More. Our Expert Team Delivers Innovative <br />
                    Solutions.
                  </>
                </Text>
               </div>
                <div className="absolute flex flex-col font-poppins h-max inset-y-[0] items-start justify-end my-auto py-1.5 right-[43%]">
                  <Text
                    className="text-base text-white-A700"
                    size="txtPoppinsBold16"
                  >
                    Company
                  </Text>
                  <Text
                    className="mt-4 text-base text-white-A700_66"
                    size="txtPoppinsRegular16WhiteA70066"
                  >
                    Services
                  </Text>
                  <Text
                    className="mt-[19px] text-base text-white-A700_66"
                    size="txtPoppinsRegular16WhiteA70066"
                  >
                    Contact
                  </Text>
                  <Text
                    className="mt-[19px] text-base text-white-A700_66"
                    size="txtPoppinsRegular16WhiteA70066"
                  >
                    Process
                  </Text>
                </div>
                <div className="absolute flex flex-col font-poppins h-max inset-y-[0] items-start justify-start my-auto py-1 right-[24%]">
                  <Text
                    className="text-base text-white-A700"
                    size="txtPoppinsBold16"
                  >
                    Follow Us
                  </Text>
                  <Text
                    className="mt-[19px] text-base text-white-A700_66"
                    size="txtPoppinsRegular16WhiteA70066"
                  >
                    X
                  </Text>
                  <Text
                    className="mt-[21px] text-base text-white-A700_66"
                    size="txtPoppinsRegular16WhiteA70066"
                  >
                    Instagram
                  </Text>
                  <Text
                    className="mt-4 text-base text-white-A700_66"
                    size="txtPoppinsRegular16WhiteA70066"
                  >
                    Linkedin
                  </Text>
                </div>
                <div className="absolute flex flex-col font-poppins h-max inset-y-[0] items-start justify-start my-auto py-[5px] right-[0]">
                  <Text
                    className="text-base text-white-A700"
                    size="txtPoppinsBold16"
                  >
                    Quick Connect
                  </Text>
                  <Text
                    className="mt-5 text-base text-white-A700_66"
                    size="txtPoppinsRegular16WhiteA70066"
                  >
                    Whatsapp
                  </Text>
                  <Text
                    className="mt-[19px] text-base text-white-A700_66"
                    size="txtPoppinsRegular16WhiteA70066"
                  >
                    Telegram
                  </Text>
                  <Text
                    className="mt-4 text-base text-white-A700_66"
                    size="txtPoppinsRegular16WhiteA70066"
                  >
                    Email
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end py-1.5">
                <Text
                  className="text-base text-white-A700"
                  size="txtPoppinsBold16"
                >
                  Legal & Partners
                </Text>
                <a
                  href="javascript:"
                  className="mt-4 text-base text-white-A700_66"
                >
                  <Text size="txtPoppinsRegular16WhiteA70066">
                    Terms & Conditions
                  </Text>
                </a>
                <a
                  href="javascript:"
                  className="mt-5 text-base text-white-A700_66"
                >
                  <Text size="txtPoppinsRegular16WhiteA70066">
                    Privacy Policy
                  </Text>
                </a>
                <Text
                  className="mt-[17px] text-base text-white-A700_66"
                  size="txtPoppinsRegular16WhiteA70066"
                >
                  Disclaimer
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FramePage;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css/navigation";
import {
  TiSocialTwitterCircular,
  TiSocialPinterestCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";
import axios from "axios";
import { selectUserId } from "../redux/userReducer";

const Slider = () => {
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = useSelector(selectUserId);

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        if (userId !== null) {
          const response = await axios.get(
            `http://127.0.0.1:3000/api/v1/users/${userId}/people`
          );
          setPersons(response.data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setError("User ID is null");
        }
      } catch (error) {
        setError("Error fetching data");
        setIsLoading(false);
      }
    };
    fetchPersons();
  }, [userId]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 font-semibold">{error}</div>
      </div>
    );
  }

  return (
    <div
      id="slider"
      style={{ position: "relative" }}
      className="w-[85%] md:w-[95%]"
    >
      <div style={{ width: "100%", position: "relative" }}>
        <div className="slider-btns">
          <div className="swiper-prev">
            <IoIosArrowBack />
          </div>
          <div className="swiper-next">
            <IoIosArrowForward />
          </div>
        </div>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          slidesPerGroup={1}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
        >
          {persons.map((person, index) => (
            <SwiperSlide
              // eslint-disable-next-line react/no-array-index-key
              key={`person-${index}`}
              className="pl-10 flex flex-col"
            >
              {console.log("Person Data:", person)}
              <div className="wrapper">
                <div className="slide-container">
                  <img
                    className="person-photo"
                    src={person.photo}
                    alt={person.name}
                    style={{
                      width: "100%",
                      height: "550px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="person-info">
                  <h3 className="person-name">{person.name}</h3>
                  <p className="person-title">{person.title}</p>
                  <p className="person-biography">{person.biography}</p>
                  <div className="slide-socials">
                    <TiSocialFacebookCircular fill="thistle" className="icon" />
                    <TiSocialTwitterCircular fill="thistle" className="icon" />
                    <TiSocialPinterestCircular
                      fill="thistle"
                      className="icon"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="bottom-footer flex items-center justify-center p-4 bg-base-100">
        <span className="text-sm font-bold">
          &copy;
          <small>Team Crusaders First Africa Life PTY</small>
        </span>
      </div>
    </div>
  );
};

export default Slider;

import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const CardProf = ({ isCompleted, images, name, description }) => {
  const apiImages = "http://37.27.29.18:8001/images";

  return (
    <Card sx={{ width: 500, maxWidth: "100%", padding: "20px" }}>
      <CardActionArea>
        <Swiper navigation={true} modules={[Navigation]}>
          {images.map((e, i) => {
            return (
              <SwiperSlide className="flex items-center">
                <CardMedia
                  key={i}
                  src={`${apiImages}/${e.imageName}`}
                  component="img"
                  height="140"
                  className="rounded-[20px]"
                  alt="image"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardProf;

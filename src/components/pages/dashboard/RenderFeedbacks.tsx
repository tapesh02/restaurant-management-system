import { Typography } from "@mui/material";
import { IoIosStar } from "react-icons/io";
import IconComponent from "../../iconComponent/IconComponent";
import mockFeedbacks from "../../../mockData/mockFeedbacks.json"

interface ImockFeedbacks {
  id: number,
  fullName: string,
  date: string,
  profilePic: string,
  reviews: string
}

const RenderFeedbacks = () => {
  return mockFeedbacks?.map(({ id, fullName, date, profilePic, reviews }: ImockFeedbacks) => (
    <div className="feedback-wrapper" key={id}>
      <div className="reviewer-image-wrapper">
        <img src={profilePic} alt="profilePic" />
      </div>
      <div className="reviewer-wrapper">
        <div className="reviewer-wrapper-top">
          <div className="reviewer-header">
            <Typography variant="h6"> {fullName}</Typography>
            <span>
              <IconComponent icon={IoIosStar} />
              <IconComponent icon={IoIosStar} />
            </span>
          </div>
          <Typography variant="subtitle1" className="date-time">
            {date}
          </Typography>
        </div>
        <Typography variant="body1" className="reviwe-details">
          {reviews}
        </Typography>
      </div>
    </div>
  ))
};

export default RenderFeedbacks;
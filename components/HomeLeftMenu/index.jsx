import React, { useState } from "react";
import lbar from "../../Asstes/style/homeLeftmenu.module.css";
import profile from "../../Asstes/Images/profile.png";
import arrowUp from "../../Asstes/Images/arrowUp.png";
import homeV from "../../Asstes/Images/homeV.png";
import vedioV from "../../Asstes/Images/vedioV.png";
import com from "../../Asstes/Images/com.png";
import fireV from "../../Asstes/Images/fireV.png";
import noti from "../../Asstes/Images/noti.png";
import explor from "../../Asstes/Images/explor.png";
import userV from "../../Asstes/Images/userV.png";
import msgV from "../../Asstes/Images/msgV.png";
import setV from "../../Asstes/Images/setV.png";
import addUser from "../../Asstes/Images/addUser.png";
import logout from "../../Asstes/Images/logout.png";
import Image from "next/image";
import CreatepostModal from "../CreatePostModal";
import { RiHomeLine } from "react-icons/ri";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { AiOutlineFire } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import { MdOutlineExplore } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";
import { RiSendPlane2Line } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { RiNotification4Line } from "react-icons/ri";
import {handleCoponentState} from "../../redux/reducers/scribbes";
import { useSelector,useDispatch } from "react-redux";
import Link from "next/link";

const HomeLeftMenu = () => {

  const [active, setActive] = useState(1);
  const dispatch=useDispatch()
  const componentState = useSelector(
    (state) => state.allGernalFunction.componentState
  );


  return (
    <>
      <div className={lbar.home_left_bar}>
        <div className={lbar.left_bar_logo}>Fuel Solution</div>
        <div className={lbar.left_bar_content_box}>
          <div
            className={lbar.left_bar_profile}

          >
            <div className={lbar.left_bar_p}>
              <div>
                <Image src={profile} />
              </div>
              <div>
                <div className={lbar.profile_name}>John Doe</div>
                <div className={lbar.profile_email}>@JohnDoeuser</div>
                <div className={lbar.profile_folowers}>
                 Remaining 190 Litter{" "}
         
                </div>
              </div>
            </div>
 
          </div>
        </div>
        <div className={lbar.menu_content_wrap}>
 
            <div
              className={
                componentState == 0 ? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
              }
              onClick={() => dispatch(handleCoponentState(0))}
            >
              <div>
                <RiHomeLine
                  className={
                    componentState == 0 ? lbar.menu_icon_active : lbar.menu_icon
                  }
                />
              </div>
              <div className="hidden md:block">Home</div>
            </div>


          <div
            className={
              componentState == 1 ? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }
            onClick={() => dispatch(handleCoponentState(1))}
          >
            <div>
              <AiOutlinePlayCircle
                className={componentState == 1 ? lbar.menu_icon_active : lbar.menu_icon}
              />
            </div>
            <div className="hidden md:block">Fuel</div>
          </div>

          <div
            className={
              componentState == 2 ? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }
            onClick={() => dispatch(handleCoponentState(2))}
          >
            <div>
              <Image src={com} />
            </div>
            <div className="hidden md:block">Reports</div>
          </div>
          <div
            className={
              componentState == 4 ? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }
            onClick={() => dispatch(handleCoponentState(4))}
          >
            <div>
              <Image src={com} />
            </div>
            <div className="hidden md:block">Disel</div>
          </div>

          <div
            className={
              componentState == 5 ? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }
            onClick={() => dispatch(handleCoponentState(5))}
          >
            <div>
              <AiOutlineFire
                className={componentState == 5 ? lbar.menu_icon_active : lbar.menu_icon}
              />
            </div>
            <div className="hidden md:block">Staff</div>
          </div>

          <div
            className={
              componentState == 6 ? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }
            onClick={() => dispatch(handleCoponentState(6))}
          >
            <div>
              <RiNotification4Line
                className={componentState == 6 ? lbar.menu_icon_active : lbar.menu_icon}
              />
            </div>
            <div className="hidden md:block">Finance</div>
          </div>

          <div
            className={
              componentState == 7 ? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }
            onClick={() => dispatch(handleCoponentState(7))}

          >
            <div>
              <MdOutlineExplore
                className={componentState == 7 ? lbar.menu_icon_active : lbar.menu_icon}
              />
            </div>
            <div className="hidden md:block">Stock</div>
          </div>

          <div
            className={
              componentState == 8 ? lbar.menu_opt_wrap_active : lbar.menu_opt_wrap
            }
            onClick={() => dispatch(handleCoponentState(8))}

          >
            <div>
              <HiOutlineUser
                className={componentState == 8 ? lbar.menu_icon_active : lbar.menu_icon}
              />
            </div>
            <div className="hidden md:block">High Octane</div>
          </div>

     

        </div>
        <div className={lbar.post_btn_wrap} >
          <div className={lbar.post_btn}>Logout</div>
        </div>
      </div>

    </>
  );
};

export default HomeLeftMenu;

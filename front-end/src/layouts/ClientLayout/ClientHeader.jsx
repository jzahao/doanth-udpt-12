import { Button, Input } from "antd";
import React from "react";
import WrapperContent from "../../components/WrapperContent/WrapperContent";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "../../constants/route";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { IoIosBusiness } from "react-icons/io";
import { userSelector } from "../../store/userslice";
import { useDispatch, useSelector } from "react-redux";
import userslice from "../../store/userslice";
import { logout } from "../../services";

const ClientHeader = () => {
  const user = useSelector(userSelector);

  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-[#011cb6]">
        <WrapperContent>
          <div className="flex justify-between h-16 items-center gap-x-8">
            <Link to={ROUTE_PATH.HOME}>
              <img src="/images/logo.png" alt="Logo" className="block h-10" />
            </Link>

            <Input
              placeholder="Tên sự kiện, tên sản phẩm, tiêu đề blog..."
              className="h-10 w-1/2 max-w-full"
              suffix={<FaSearch />}
            />

            <div className="flex items-center gap-x-3">
              {!user.token ? (
                <>
                  <Link className="text-white" to={ROUTE_PATH.SIGN_IN}>
                    Đăng nhập
                  </Link>
                  <p className="text-white">|</p>
                  <Link className="text-white" to={ROUTE_PATH.SIGN_UP}>
                    Đăng ký
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    className="text-white"
                    onClick={() => {
                      logout(user.token);
                      dispatch(userslice.actions.logout());
                    }}
                  >
                    Đăng xuất
                  </Link>
                  {user.role === "CUSTOMER" && (
                    <Link to={ROUTE_PATH.MY_PROFILE}>
                      <FaUserCircle className="text-2xl text-white" />
                    </Link>
                  )}
                  {user.role === "ENTERPRISE" && (
                    <Link to={ROUTE_PATH.ENTERPRISE_PROFILE}>
                      <IoIosBusiness className="text-2xl text-white" />
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        </WrapperContent>
      </div>

      <div className="shadow-[rgba(0,0,0,0.05)_0px_1px_2px_0px]">
        <WrapperContent>
          <div className="h-11 flex items-center justify-between">
            <Link className="uppercase font-semibold">Sự kiện</Link>
            <Link className="uppercase font-semibold">Dịch vụ</Link>
            <Link className="uppercase font-semibold">Bảo hiểm</Link>
            <Link className="uppercase font-semibold">Blog</Link>
            <Link className="uppercase font-semibold">Hỗ trợ</Link>
            <Link className="uppercase font-semibold">Giải pháp</Link>
          </div>
        </WrapperContent>
      </div>
    </>
  );
};

export default ClientHeader;

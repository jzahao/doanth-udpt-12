import React from "react";
import WrapperContent from "../../components/WrapperContent/WrapperContent";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "../../constants/route";

const SignUpPage = () => {
  return (
    <div className="px-8 py-11">
      <WrapperContent className="bg-white py-11 rounded px-4">
        <h1 className="text-center font-semibold text-2xl uppercase mb-6">
          Đăng ký
        </h1>

        <Form layout="vertical" className="w-[500px] max-w-full mx-auto">
          <Form.Item
            name="name"
            label={<p className="text-[#003fa3] font-bold text-base">Name</p>}
          >
            <Input placeholder="Nhập họ tên" className="h-12 text-base" />
          </Form.Item>

          <Form.Item
            name="email"
            label={<p className="text-[#003fa3] font-bold text-base">Email</p>}
          >
            <Input placeholder="Nhập email" className="h-12 text-base" />
          </Form.Item>

          <Form.Item
            name="password"
            label={
              <p className="text-[#003fa3] font-bold text-base">Mật khẩu</p>
            }
          >
            <Input.Password
              placeholder="Nhập mật khẩu"
              className="h-12 text-base"
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            label={
              <p className="text-[#003fa3] font-bold text-base">
                Nhập lại mật khẩu
              </p>
            }
          >
            <Input.Password
              placeholder="Nhập lại mật khẩu"
              className="h-12 text-base"
            />
          </Form.Item>

          <Button className="bg-[#011bb6] hover:!bg-[#011bb6] h-12 rounded w-full mt-4">
            <p className="uppercase text-white text-base font-semibold">
              Đăng ký
            </p>
          </Button>

          <div className="text-center mt-3 text-base">
            <span className="text-[#626579]">Bạn đã có tài khoản? </span>

            <Link to={ROUTE_PATH.SIGN_IN} className="text-[#f1600d]">
              Đăng nhập
            </Link>
          </div>
        </Form>
      </WrapperContent>
    </div>
  );
};

export default SignUpPage;

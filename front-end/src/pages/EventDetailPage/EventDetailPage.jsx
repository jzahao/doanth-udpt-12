import React, { useEffect, useState } from "react";
import WrapperContent from "../../components/WrapperContent/WrapperContent";
import { FaCalendarCheck } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { Button } from "antd";
import { useParams } from "react-router-dom";
import { getEvent, getEnterprise } from "../../services";

const EventDetailPage = () => {
  const [event, setEvent] = useState("");
  const [enterprise, setEnterprise] = useState("");

  const param = useParams();

  useEffect(() => {
    getEvent(param.eventId)
      .then((res) => {
        if (res.code === 200) setEvent(res.result);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (event.enterprise) {
      getEnterprise(event.enterprise)
        .then((res) => {
          if (res.code === 200) setEnterprise(res.result);
        })
        .catch((err) => console.log(err));
    }
  }, [event]);

  console.log(enterprise);

  return (
    <div className="py-4">
      <WrapperContent>
        <div className="grid grid-cols-12 gap-x-4">
          <div className="col-span-8">
            <div
              style={{
                backgroundImage:
                  "url(https://pix.raceez.com/2024/06/03/Banner_1440_x_600_20240603132546.jpg)",
              }}
              className="pt-[45%] bg-no-repeat bg-center bg-cover"
            ></div>

            <div className="bg-white rounded-b">
              <div className="p-[14px]">
                <p className="uppercase font-bold text-lg">{event.name}</p>

                <div className="flex items-center text-sm text-[#626579] gap-x-2 mt-2">
                  <FaCalendarCheck className="text-sm" />
                  <p>
                    <span>{event.date}</span>
                    <span className="ml-10">
                      {event.startTime} - {event.endTime}
                    </span>
                  </p>
                </div>

                <div className="flex items-center text-sm text-[#626579] gap-x-2 mt-2">
                  <FiMapPin className="text-sm" />
                  <p className="flex-1">{event.location}</p>
                </div>
              </div>

              <div className="border-t text-sm border-t-[#e3e7fc] px-3 py-[14px]">
                <p className="text-[#626579]">Ban tổ chức</p>

                <p className="font-medium  uppercase text-[#011bb6] mt-1">
                  {enterprise.name}
                </p>
              </div>
            </div>

            <div className="mt-4 bg-white rounded">
              <div className="px-[14px] py-3 border-b border-[#eff0f2]">
                <p className="uppercase font-bold">Thông tin sự kiện</p>
              </div>

              <div className="px-[14px] pt-3 pb-6">
                <p>
                  Pocari Sweat Run Việt Nam 2024 (PSR 2024) hân hoan chào đón sự
                  trở lại với chủ đề "GO for the BETTER", đánh dấu cột mốc 5 năm
                  đồng hành cùng cộng đồng đam mê chạy bộ. Hơn cả một giải chạy,
                  Pocari Sweat Run là hành trình truyền cảm hứng, khích lệ mỗi
                  runner chinh phục giới hạn bản thân và hướng đến lối sống khỏe
                  mạnh và tích cực hơn. <br /> <br />
                  Dù bạn là vận động viên dày dạn kinh nghiệm hay chỉ mới bắt
                  đầu hành trình chạy bộ, Pocari Sweat Run đều chào đón bạn. Hãy
                  bước ra khỏi vùng an toàn, thử thách bản thân và theo đuổi
                  những mục tiêu mới. <br /> <br />
                  Mỗi sải chân trên đường chạy là một minh chứng cho sự nỗ lực
                  và quyết tâm của bạn. Dù là bước tiến nhỏ nhất, hãy ghi nhận
                  và tự hào về những gì bạn đã đạt được. Pocari Sweat Run tôn
                  vinh tinh thần thể thao và ý chí kiên cường của mỗi runner.{" "}
                  <br /> <br />
                  Pocari Sweat Run là nơi bạn kết nối với những người có cùng
                  đam mê, động viên nhau tiến về phía trước. Hãy lan tỏa tinh
                  thần tích cực, truyền cảm hứng cho những người xung quanh và
                  cùng nhau tạo nên một cộng đồng runner gắn kết, mạnh mẽ.{" "}
                  <br /> <br />
                  Hơn cả một cuộc đua, đây là hành trình hướng tới phiên bản tốt
                  đẹp hơn cho bản thân và cộng đồng. Hãy tham gia Pocari Sweat
                  Run Việt Nam 2024 và cùng nhau “GO for the BETTER".
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <div className="bg-white rounded p-3 text-center">
              <p className="text-[#f1600d]">
                <span>Chỉ từ </span>
                <span className="font-bold">390.000 đ</span>
              </p>

              <Button className="bg-[#011bb6] hover:!bg-[#011bb6] h-8 rounded w-40 max-w-full mt-2">
                <p className="uppercase text-white text-xs font-semibold">
                  Đăng ký
                </p>
              </Button>
            </div>
          </div>
        </div>
      </WrapperContent>
    </div>
  );
};

export default EventDetailPage;

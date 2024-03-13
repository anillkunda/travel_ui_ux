import { appleIcon, playStoreIcon } from "../assets/icons";
import { phones } from "../assets/images";
import { Button } from "../components";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div
          className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12"
          data-aos="fade-right"
        >
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iOS and Android
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon={appleIcon}
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon={playStoreIcon}
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <img
            src={phones}
            alt="iPhone app Ui screen"
            width={550}
            height={870}
            data-aos="fade-left"
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;

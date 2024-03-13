import { foldedMapIcon } from "../assets/icons";
import { quote } from "../assets/images";
import { peopleURL } from "../constants";

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div
        className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400] xl:h-[640px]"
        data-aos="fade-up"
      >
        <CampSite
          bgImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          bgImage="bg-bg-img-2"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6" data-aos="fade-up">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That`s why we are here for those of you who want to start an
            adventure
          </p>
          <img
            src={quote}
            alt="Double Quote Image"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

const CampSite = ({ bgImage, title, subtitle, peopleJoined }) => {
  return (
    <div
      className={`h-full w-full lg:min-w-[1100px] xs:min-w-[600px] ${bgImage} bg-cover bg-no-repeat lg:rounded-r-5xl xs:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <img
              src={foldedMapIcon}
              alt="Folded Map Icon"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="bold-18 text-white">{title}</h2>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {peopleURL.map((url) => (
              <img
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="Person Image"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

export default Camp;

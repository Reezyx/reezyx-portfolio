import React from "react";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { animated, useSpring } from "@react-spring/web";

function Experience() {
  const style = useSpring({
    from: {
      opacity: 0,
      y: "-8%",
    },
    to: {
      opacity: 1,
      y: "0%",
    },
    config: {
      duration: 500,
    },
  });
  return (
    <>
      {/* WEB VIEW*/}
      <div className="mt-4 md:block hidden">
        <section className="bg-white">
          <div className="md:pt-8">
            <div>
              <animated.div
                style={style}
                className="grid grid-cols-5 bg-white px-8 xl:py-12 lg:py-4 md:py-16"
              >
                <div className="col-span-3 my-auto xl:ml-32 text-end">
                  <p className="text-gray-900 xl:text-3xl md:text-xl font-bold">
                    PT Amanah Karya Indonesia
                  </p>
                  <p className="text-gray-600 xl:text-2xl md:text-base">
                    Backend Developer Intern
                  </p>
                  <div className="flex justify-end">
                    <p className="w-1/4 md:w-1/3 my-2 rounded-xl bg-type-string text-gray-800 flex justify-center xl:text-lg md:text-sm">
                      Freelance
                    </p>
                  </div>
                  <p className="text-justify xl:text-lg md:text-md text-gray-600">
                    <a
                      href="https://amanahcorp.co.id/"
                      target="_blank"
                      className="text-blue-600"
                    >
                      PT Amanah Karya Indonesia
                    </a>{" "}
                    is a company engaged in IT Consulting and Software
                    Development, established in 2012 in Jakarta and has legality
                    as a Limited Liability Company (PT) since 2016. PT. Amanah
                    Karya Indonesia was built and developed with experienced
                    young professionals to provide the best solutions for each
                    of our clients. With more than 8 years of experience in
                    software development we offer quality, timely and affordable
                    software development.
                  </p>
                </div>
                <div className="col-span-2 flex items-center">
                  <img className="w-full" src="/image/amanah.png" alt="" />
                </div>
              </animated.div>
            </div>
            <div className="grid grid-cols-5 bg-gray-200 px-8 animate xl:py-8 lg:py-4 md:py-16">
              <div className="col-span-2 flex items-center">
                <img className="w-full" src="/image/ruangguru.png" alt="" />
              </div>
              <div className="col-span-3 my-auto xl:mr-32">
                <p className="text-gray-900 xl:text-3xl md:text-xl font-bold">
                  Ruangguru
                </p>
                <p className="text-gray-600 xl:text-2xl md:text-base">
                  Backed Programming Bootcamp
                </p>
                <p className="w-1/4 md:w-1/3 rounded-xl my-2 bg-type-string text-gray-800 flex justify-center xl:text-lg md:text-sm">
                  Unformal Education
                </p>
                <p className="text-justify xl:text-lg md:text-md text-gray-600">
                  <a
                    href="https://www.ruangguru.com/"
                    target="_blank"
                    className="text-blue-600"
                  >
                    Ruangguru
                  </a>{" "}
                  is the largest technology company in Indonesia that focuses on
                  education-based services. We have more than 22,000,000 users
                  and manage 300,000 teachers who offer services in more than
                  100 subject areas. Ruangguru develops various technology-based
                  learning services, including virtual classroom services,
                  online exam platforms, subscription learning videos, private
                  tutoring marketplaces, and other educational content that can
                  be accessed via the Ruangguru web and application. Ruangguru
                  have also been trusted to partner with 32 (out of 34)
                  Provincial Governments and 326 City and Regency Governments in
                  Indonesia.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-5 bg-white px-8 xl:py-4 lg:py-4 md:py-16">
              <div className="col-span-3 my-auto xl:ml-32 text-end">
                <p className="text-gray-900 xl:text-3xl md:text-xl font-bold">
                  Jakarta State University
                </p>
                <p className="text-gray-600 xl:text-2xl md:text-base">
                  Computer Science
                </p>
                <div className="flex justify-end">
                  <p className="w-1/4 md:w-1/3 rounded-xl my-2 bg-type-string text-gray-800 flex justify-center xl:text-lg md:text-sm">
                    Formal Education
                  </p>
                </div>
                <p className="text-justify xl:text-lg md:text-md text-gray-600">
                  <a
                    href="https://www.unj.ac.id/"
                    target="_blank"
                    className="text-blue-600"
                  >
                    Jakarta State University
                  </a>{" "}
                  is a state university located in the city of Jakarta,
                  Indonesia which was founded in 1964. Previously, Jakarta State
                  University was named the Jakarta Teaching and Education
                  Institute. Jakarta State University has its full address at
                  Jl. R. Mangun Muka Raya No. 11, RT. 11/RW. 14, Rawamangun,
                  Kec. Pulo Gadung, City of East Jakarta, Special Capital Region
                  of Jakarta 13220. Currently there are 4 campuses namely Campus
                  A in Rawamangun, Campus B in Pemuda, Campus D in Halimun, and
                  Campus E in Setia Budi.
                </p>
              </div>
              <div className="col-span-2 flex items-center">
                <img className="w-full" src="/image/unj.png" alt="" />
              </div>
            </div>
            <div className="grid grid-cols-5 px-8 bg-gray-200 xl:mt-8 lg:py-2 md:py-16">
              <div className="col-span-2 flex items-center">
                <img className="w-full" src="/image/sma9.png" alt="" />
              </div>
              <div className="col-span-3 my-auto xl:mr-32">
                <p className="text-gray-900 xl:text-3xl md:text-xl font-bold">
                  Bekasi 9 State Senior High School
                </p>
                <p className="text-gray-600 xl:text-2xl md:text-lg">
                  Natural Science
                </p>
                <p className="w-1/4 md:w-1/3 my-2 rounded-xl bg-type-string text-gray-800 flex justify-center xl:text-lg md:text-sm">
                  Formal Education
                </p>
                <p className="text-justify xl:text-lg md:text-md text-gray-600">
                  <a
                    href="https://sman9kotabekasi.sch.id/"
                    target="_blank"
                    className="text-blue-600"
                  >
                    Bekasi 9 State Senior High School
                  </a>{" "}
                  was established in 1997 which is located on Jl. Raya Legenda
                  RT 02 RW 11 Mustika Jaya, Bekasi City. This school is a public
                  high school which was originally a filial (distance class) of
                  Bekasi 2 State Senior High School City. Until now, it stands
                  on a land area of 8,100 m2. Bekasi 9 State Senior High School
                  has now grown rapidly to become a large school in the eastern
                  part of Bekasi City. Many graduates from this school have
                  successfully continued on to leading universities in
                  Indonesia.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* WEB VIEW*/}

      {/* MOBILE VIEW */}
      <div className="md:hidden">
        <section className="bg-white">
          <div className="pt-24">
            <div>
              <div className="flex justify-center">
                <img className="w-5/6" src="/image/amanah.png" alt="" />
              </div>
              <p className="text-gray-900 text-xl text-center font-bold">
                PT Amanah Karya Indonesia
              </p>
              <p className="text-gray-600 text-base text-center py-1">
                Backend Developer Intern
              </p>
              <p className="w-1/2 my-1 text-base rounded-xl bg-type-string text-gray-800 text-center mx-auto">
                Internship Program
              </p>
              <p className="text-justify text-sm px-6 py-3 pb-5 text-gray-600">
                <a
                  href="https://amanahcorp.co.id/"
                  target="_blank"
                  className="text-blue-600"
                >
                  PT Amanah Karya Indonesia
                </a>{" "}
                is a company engaged in IT Consulting and Software Development,
                established in 2012 in Jakarta and has legality as a Limited
                Liability Company (PT) since 2016. PT. Amanah Karya Indonesia
                was built and developed with experienced young professionals to
                provide the best solutions for each of our clients. With more
                than 8 years of experience in software development we offer
                quality, timely and affordable software development.
              </p>
            </div>

            <div className="bg-gray-200">
              <div className="flex justify-center">
                <img className="w-5/6" src="/image/ruangguru.png" alt="" />
              </div>
              <p className="text-gray-900 text-xl text-center font-bold">
                Ruangguru
              </p>
              <p className="text-gray-600 text-base text-center py-1">
                Backed Programming Bootcamp
              </p>
              <p className="w-1/2 my-1 text-base rounded-xl bg-type-string text-gray-800 text-center mx-auto">
                Unformal Education
              </p>
              <p className="text-justify text-sm px-6 py-3 pb-5 text-gray-600">
                <a
                  href="https://www.ruangguru.com/"
                  target="_blank"
                  className="text-blue-600"
                >
                  Ruangguru
                </a>{" "}
                is the largest technology company in Indonesia that focuses on
                education-based services. We have more than 22,000,000 users and
                manage 300,000 teachers who offer services in more than 100
                subject areas. Ruangguru develops various technology-based
                learning services, including virtual classroom services, online
                exam platforms, subscription learning videos, private tutoring
                marketplaces, and other educational content that can be accessed
                via the Ruangguru web and application. Ruangguru have also been
                trusted to partner with 32 (out of 34) Provincial Governments
                and 326 City and Regency Governments in Indonesia.
              </p>
            </div>

            <div className="">
              <div className="flex justify-center">
                <img className="w-5/6" src="/image/unj.png" alt="" />
              </div>
              <p className="text-gray-900 text-xl text-center font-bold">
                Jakarta State University
              </p>
              <p className="text-gray-600 text-base text-center py-1">
                Computer Science
              </p>
              <p className="w-1/2 my-1 text-base rounded-xl bg-type-string text-gray-800 text-center mx-auto">
                Formal Education
              </p>
              <p className="text-justify text-sm px-6 py-3 pb-5 text-gray-600">
                <a
                  href="https://www.unj.ac.id/"
                  target="_blank"
                  className="text-blue-600"
                >
                  Jakarta State University
                </a>{" "}
                is a state university located in the city of Jakarta, Indonesia
                which was founded in 1964. Previously, Jakarta State University
                was named the Jakarta Teaching and Education Institute. Jakarta
                State University has its full address at Jl. R. Mangun Muka Raya
                No. 11, RT. 11/RW. 14, Rawamangun, Kec. Pulo Gadung, City of
                East Jakarta, Special Capital Region of Jakarta 13220. Currently
                there are 4 campuses namely Campus A in Rawamangun, Campus B in
                Pemuda, Campus D in Halimun, and Campus E in Setia Budi.
              </p>
            </div>

            <div className="bg-gray-200">
              <div className="flex justify-center">
                <img className="w-5/6" src="/image/sma9.png" alt="" />
              </div>
              <p className="text-gray-900 text-xl text-center font-bold">
                Bekasi 9 State Senior High School
              </p>
              <p className="text-gray-600 text-base text-center py-1">
                Natural Science
              </p>
              <p className="w-1/2 my-1 text-base rounded-xl bg-type-string text-gray-800 text-center mx-auto">
                Formal Education
              </p>
              <p className="text-justify text-sm px-6 py-3 pb-5 text-gray-600">
                <a
                  href="https://sman9kotabekasi.sch.id/"
                  target="_blank"
                  className="text-blue-600"
                >
                  Bekasi 9 State Senior High School
                </a>{" "}
                was established in 1997 which is located on Jl. Raya Legenda RT
                02 RW 11 Mustika Jaya, Bekasi City. This school is a public high
                school which was originally a filial (distance class) of Bekasi
                2 State Senior High School City. Until now, it stands on a land
                area of 8,100 m2. Bekasi 9 State Senior High School has now
                grown rapidly to become a large school in the eastern part of
                Bekasi City. Many graduates from this school have successfully
                continued on to leading universities in Indonesia.
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* MOBILE VIEW */}
    </>
  );
}

export default Experience;

import { useParams } from "react-router-dom";
import { guides as guidesData } from "../../../../jsone/masterData";
import { SideMenu } from "../../../components/helper";
export default function GuidesDetail() {
  const { title } = useParams();
  const guides = guidesData.find(
    (guides) => guides.title === decodeURIComponent(title)
  );

  console.log(title, decodeURIComponent(title));
  const breadCrumb = [
    {
      title: <a href="/learing">Learing</a>,
    },
    {
      title: <a href="/learing/guides">Guides</a>,
    },
    {
      title: guides.title,
    },
  ];
  return (
    <SideMenu breadCrumb={breadCrumb}>
      <div className="flex gap-9 items-center justify-center">
        <div>
          <h1 className=" text-2xl  font-semibold">{guides.title}</h1>
          <p className="uppercase text-green-400 font-semibold">4 min read</p>
        </div>

        <img
          src={guides.imageSrc}
          alt={guides.title}
          className="h-auto w-[50%]"
        />
      </div>
      <div className="flex gap-10 p-10">
        <div>
          <p>{guides.description}</p>
          <h2 className="uppercase text-lg">Step 1</h2>
          <p>
            Enterprise content marketing is designed to attract and engage a
            large-scale organization’s target audience. Scale and complexity
            sets it apart from traditional content marketing. While traditional
            content marketing focuses more on individual campaigns and smaller
            target markets, enterprise content marketing takes a more holistic
            and integrated approach. You want your brand to be the one that
            everybody looks to as an expert in the industry.
          </p>
          <p>
            <h2 className="uppercase text-lg">Step 2</h2>
            When it comes to content marketing, the most successful enterprises
            create spread the wealth across multiple channels that each cater to
            larger, more diverse audiences. This strategy aligns content efforts
            with broader business goals to drive brand awareness, thought
            leadership, customer engagement, and, ultimately, business growth.
          </p>
        </div>
      </div>
    </SideMenu>
  );
}

import { AutoComplete } from "antd";
import { LearingCard, SideMenu } from "../../components/helper";
import {
  articles,
  blogs,
  community,
  guides,
  templates,
  tools,
  faqArray
} from "../../../jsone/masterData";

const Learing = () => {
  const breadCrumb = [
    {
      title: "Learing",
    },
  ];
  return (
    <SideMenu breadCrumb={breadCrumb}>
      <div className="py-4">
        <div className="flex flex-col gap-6 items-center ">
          <div className="flex flex-col gap-3">
            <h1 className=" text-xl font-semibold">
              Welcome to the Airtable Community!
            </h1>
          </div>
          <div>
            <AutoComplete
              allowClear
              options={[]}
              size="large"
              style={{
                width: 200,
              }}
              // onSelect={onSelect}
              // onSearch={(text) => setOptions(getPanelValue(text))}
              placeholder="Search"
            />
          </div>
        </div>
        <LearingCard
          viewAll={"/learing/articles"}
          cardData={articles}
          heading="Articles"
        />
        <LearingCard
          cardData={guides}
          viewAll={"/learing/guides"}
          heading="Guides"
        />
        <LearingCard
          cardData={templates}
          heading="Templates"
          viewAll={"/learing/templates"}
        />
        <LearingCard
          cardData={tools}
          heading="Tools"
          viewAll={"/learing/tools"}
        />

        <LearingCard
          viewAll={"/learing/blogs"}
          cardData={blogs}
          heading="Blogs"
        />
        <LearingCard
          viewAll="/learing/community"
          cardData={community}
          heading="Community"
        />
        <LearingCard
          cardData={faqArray}
          heading="Faqs"
          viewAll='learing/faqs'
        />
      </div>
    </SideMenu>
  );
};

export default Learing;

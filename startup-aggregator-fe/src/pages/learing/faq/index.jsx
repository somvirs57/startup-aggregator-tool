import { Collapse } from "antd";
import { SideMenu } from "../../../components/helper";
import { faqArray } from "../../../../jsone/masterData";

export default function Faq() {
  const { Panel } = Collapse;
  const breadCrumb = [
    { title: <a href="/learing">Learing</a> },
    { title: "FAQ's" },
  ];
  return (
    <SideMenu breadCrumb={breadCrumb}>
      <div className=" text-center m-5">
        <h1 className="text-3xl font-bold">Do You Have Questions?</h1>
        <h2 className="font-2xl font-semibold">We have answers (well, most of the times!)</h2>
        <h2 className="font-xl font-semibold">
          Below you’ll find answers to the most common questions you may have on
          AdEspresso & Online Advertising.
        </h2>{" "}
      </div>
      <div className="max-w-4xl mx-auto p-4">
        <Collapse accordion>
          {faqArray.map((faq) => (
            <Panel header={faq.title} key={faq.id}>
              <p>{faq.description}</p>
            </Panel>
          ))}
        </Collapse>
      </div>
    </SideMenu>
  );
}

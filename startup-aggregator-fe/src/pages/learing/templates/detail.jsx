import { useParams } from "react-router-dom";
import { templates } from "../../../../jsone/masterData";
import { Button, SideMenu } from "../../../components/helper";
export default function TemplatesDetail() {
  const { title } = useParams();
  const template = templates.find(
    (template) => template.title === decodeURIComponent(title)
  );

  console.log(title, decodeURIComponent(title));
  const breadCrumb = [
    {
      title: <a href="/learing">Learing</a>,
    },
    {
      title: <a href="/learing/templates">Template</a>,
    },
    {
      title: template.title,
    },
  ];
  return (
    <SideMenu breadCrumb={breadCrumb}>
      <div className="flex items-center justify-between px-5">
        <h1 className=" text-2xl  font-semibold">{template.title}</h1>
        <Button>Download</Button>
      </div>
      <div className="py-5">
        <p className="font-bold my-2">#PRODUCT, DESIGN, AND UX</p>
        <img
          src={template.imageSrc}
          alt={template.title}
          // className="h-[10%] w-[80%]"
        />
      </div>
      <div className="flex gap-10 py-10">
        <section>
          <div className="flex gap-10 ">
            <div>
              {/* <p>{template.description}</p> */}
              <h2 className="uppercase text-xl font-semibold my-2">
                {" "}
                Why use this team-level Product Ops template?
              </h2>
              <p className=" text-justify">
                Product teams use Airtable to take products from concept through
                market release to stay agile and keep their customers front and
                center at every stage of product development. When you have a
                single source of truth in Airtable, you can keep all functions
                aligned and working as one team—so you can turn insights into
                user-centric products that customers love. In this reference
                template, we’ll share tips and best practices, gathered by
                leading product teams in the industry like Intuit and Frame.io,
                for leveraging Airtable to streamline and unify each of the six
                stages of product development for individual teams. Follow our
                step-by-step Product Ops Implementation Guides here, alongside
                this reference template. Ready to scale this across multiple
                teams or even your entire organization? Follow along in our
                org-wide Product Operations template here.
              </p>
            </div>
          </div>
        </section>
        <div className="w-[100%]">
          <h2 className=" text-xl font-semibold">CATEGORIES</h2>
          <div>
            <ul>
              
            <li> AI Powered</li> 
            <li> Content production</li> 
            <li> Creative</li> 
            <li> Event Planning</li> 
            <li> Everyday Life</li> 
            <li> Groups, Clubs & Hobbies</li> 
            <li> HR & Recruiting</li> 
            <li> Legal</li> 
            <li> Local Business</li> 
            <li> Marketing</li> 
              
            </ul>
          </div>
        </div>
      </div>
    </SideMenu>
  );
}

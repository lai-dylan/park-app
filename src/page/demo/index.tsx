import "./index.css";
import BearBox from "@/page/demo/components/bearBox.tsx";

export default function Demo() {

  return (
    <div className="container">
      <div>
        <BearBox/>
        <BearBox/>
        <BearBox/>
      </div>
      <div>
        <BearBox/>
      </div>
    </div>
  );
}
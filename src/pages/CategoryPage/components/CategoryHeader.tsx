import { TextH2 } from "../../../components/Elements/typography";
import { Header } from "../../../components/Header";

interface Props {
  title: string;
}
export const CategoryHeader = ({ title }: Props) => {
  return (
    <div className="header bg-black" data-testid="header">
      <Header fixed />
      <div
        className="title flex justify-center items-center"
        data-testid="title"
      >
        <TextH2 className="text-white py-24  ">{title}</TextH2>
      </div>
    </div>
  );
};

import {
  Avatar,
  AppBar,
  AppBarSection,
  AppBarSpacer,
} from "@progress/kendo-react-layout";
import {
  DropDownList,
  DropDownListChangeEvent,
} from "@progress/kendo-react-dropdowns";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import { SvgIcon } from "@progress/kendo-react-common";
import { bellIcon } from "@progress/kendo-svg-icons";

interface MenuProps {
  selectedCategory: string;
  handleCategoryChange: (event: DropDownListChangeEvent) => void;
}

export const categories = ["Populares", "Bem Avaliados", "Novidades"];

const Menu = ({ selectedCategory, handleCategoryChange }: MenuProps) => {
  let kendokaAvatar =
    "https://www.telerik.com/kendo-react-ui-develop/components/images/kendoka-react.png";
  let logoUrl = "https://cdn-icons-png.flaticon.com/512/2917/2917656.png";

  return (
    <div>
      <AppBar>
        <AppBarSection className="logo-section">
          <img
            src={logoUrl}
            alt="Feed Movies Logo"
            style={{ height: "40px" }}
          />
        </AppBarSection>

        <AppBarSection className="title">
          <h1 className="title">Feed Movies</h1>
        </AppBarSection>

        <AppBarSpacer
          style={{
            width: 32,
          }}
        />

        <AppBarSection className="appbar-items">
          <div>Selecione a lista de filmes a serem exibidos:</div>
          <DropDownList
            style={{ width: "170px" }}
            data={categories}
            value={selectedCategory}
            onChange={handleCategoryChange}
          />
        </AppBarSection>

        <AppBarSpacer />

        <AppBarSection className="user-actions">
          <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
            <BadgeContainer>
              <SvgIcon icon={bellIcon} />
              <Badge themeColor="info" size="small" position="inside" />
            </BadgeContainer>
          </button>
          <span className="k-appbar-separator" />
        </AppBarSection>
        <AppBarSection>
          <Avatar type="image">
            <img src={kendokaAvatar} alt="KendoReact Layout Kendoka Avatar" />
          </Avatar>
        </AppBarSection>
      </AppBar>
    </div>
  );
};

export default Menu;

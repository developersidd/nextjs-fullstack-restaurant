"use client";
import { menuItems } from "@/assets/data/menuData";
import Menu1 from "@/assets/images/menu-1.jpg";
import Menu2 from "@/assets/images/menu-2.jpg";
import Menu3 from "@/assets/images/menu-3.jpg";
import Menu from "@/components/Menu/Menu";
import HighlightedMenuItem from "@/components/MenuItem/HighlightedMenuItem";
import MenuItem from "@/components/MenuItem/MenuItem";
import useMediaQuery from "@/hooks/useMediaQuery";
import MenuToolTip from "@/ui/MenuToolTip";
const AllMenus = () => {
  const mobile = useMediaQuery("768");
  return (
    <>
      {/*  Menu One */}
      <Menu
        key={1}
        title="The Perfect Patty"
        des="Effortless comfortable full leather lining. Effortless comfortable full leather lining eye-catching unique detail"
        src={Menu1}

      >
        {/* Here is all menu items */}
        {
          menuItems?.menuOne?.map(({ name, items, price, benefits }, ind) => (
            <>
              {ind === 0 ? (<HighlightedMenuItem
                data-tooltip-id={`item-${name}`}
                data-tooltip-place={`${mobile ? "bottom" : "right"}`}
                key={name} title={name} des={items} price={price}
                tag="New" />
              )
                :
                (<MenuItem data-tooltip-id={`item-${name}`}
                  data-tooltip-place={`${mobile ? "bottom" : "right"}`}

                  key={name} title={name} des={items} price={price} />)
              }
              <MenuToolTip name={name} data={benefits} />
            </>
          )

          )
        }
      </Menu>
      {/*  Menu Two */}
      <Menu
        key={2}
        imgFirst={false}
        title="Meet your meat"
        des="Effortless comfortable full leather lining. Effortless comfortable full leather lining eye-catching unique detail"
        src={Menu2}

      >
        {/* Here is all menu items */}

        {
          menuItems?.menuThree?.map(({ name, items, price, benefits }, ind) => (
            <>
              {ind === 2 ? (<HighlightedMenuItem
                data-tooltip-id={`item-${name}`}
                data-tooltip-place={`${mobile ? "bottom" : "right"}`}
                key={name} title={name} des={items} price={price}
                tag="New" />
              )
                :
                (<MenuItem data-tooltip-id={`item-${name}`}
                  data-tooltip-place={`${mobile ? "bottom" : "right"}`}

                  key={name} title={name} des={items} price={price} />)
              }
              <MenuToolTip name={name} data={benefits} />
            </>
          ))
        }
      </Menu>

      {/*  Menu Three */}
      <Menu
        title="Delight in every bite"
        des="Effortless comfortable full leather lining. Effortless comfortable full leather lining eye-catching unique detail"
        src={Menu3}
        key={3}
      >
        {/* Here is all menu items */}

        {
          menuItems?.menuThree?.map(({ name, items, price, benefits }, ind) => (
            <>
              {ind === 3 ? (<HighlightedMenuItem
                data-tooltip-id={`item-${name}`}
                data-tooltip-place={`${mobile ? "bottom" : "right"}`}
                key={name} title={name} des={items} price={price}
                tag="New" />
              )
                :
                (<MenuItem data-tooltip-id={`item-${name}`}
                  data-tooltip-place={`${mobile ? "bottom" : "right"}`}

                  key={name} title={name} des={items} price={price} />)
              }
              <MenuToolTip name={name} data={benefits} />
            </>
          ))
        }
      </Menu>

    </>
  )
}

export default AllMenus
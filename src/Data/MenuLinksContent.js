import SEARCHICON from "./../asset/icons8-search-60.png";
import LOCATIONICON from "./../asset/icons8-place-marker-60.png";
import CATERINGICON from "./../asset/icons8-bread-60.png";
import CONTROLICON from "./../asset/icons8-project-setup-60.png";
import SETTINGICON from "./../asset/icons8-settings-60.png";

import SEARCH from "./../asset/search.png";
import POSITION from "./../asset/position.png";
import CATERING from "./../asset/catering.png";
import CONTROLS from "./../asset/controls.png";
import SETTINGS from "./../asset/settings.png";
import MENU from "./../asset/menu.png";

const MenuLinksContent = [
  {
    icon: SEARCHICON,
    title: "Search",
    linkContent: {
      header: "Search",
      description: "Search for specific locations and services.",
      searchBar: true,
      image: SEARCH,
      subLinks: [
        { name: "Classrooms", link: "#classrooms" },
        { name: "Restrooms", link: "#restrooms" },
        { name: "Parking Lots", link: "#parking-lots" },
      ],
    },
  },
  {
    icon: LOCATIONICON,
    title: "Places",
    linkContent: {
      header: "Places",
      description: "Find your way around the campus easily.",
      image: POSITION,
      subLinks: [
        { name: "Faculty of Engineering", link: "#innovation" },
        { name: "Near East Hospital", link: "#Hospital" },
        { name: "Library", link: "#library" },
        { name: "Intl Student Center", link: "#student-office" },
      ],
    },
  },
  {
    icon: CATERINGICON,
    title: "Catering",
    linkContent: {
      header: "Catering",
      description: "Search for specific locations and services.",
      image: CATERING,
      subLinks: [
        { name: "Main Cafeteria", link: "#main-cafeteria" },
        { name: "Coffee Shop", link: "#coffee-shop" },
        { name: "Pizza Hut", link: "#pizza-hut" },
      ],
    },
  },
  {
    icon: CONTROLICON,
    title: "Controls",
    linkContent: {
      header: "Controls",
      description: "Search for specific locations and services.",
      image: CONTROLS,
      subLinks: [
        { name: "HVAC System", link: "#hvac-system" },
        { name: "Lighting Control", link: "#lighting-control" },
        { name: "Access Control", link: "#access-control" },
      ],
    },
  },
  {
    icon: SETTINGICON,
    title: "Settings",
    linkContent: {
      header: "Settings",
      description: "Search for specific locations and services.",
      image: SETTINGS,
      subLinks: [
        { name: "Profile Settings", link: "#profile-settings" },
        {
          name: "Notification Preferences",
          link: "#notification-preferences",
        },

        { name: "Language", link: "#Language" },
      ],
    },
  },
];

const menuContent = {
  header: "Menu",
  description: "Discover various locations and services across the campus.",
  image: MENU,
  subLinks: [
    { name: "Start", link: "index.html" },
    {
      name: "Academic Buildings",
      link: "#academic-buildings",
    },
    { name: "Hospitals", link: "#hospital" },
    { name: "Athletics Center", link: "#athletics" },
  ],
};

export default MenuLinksContent;
export { menuContent };

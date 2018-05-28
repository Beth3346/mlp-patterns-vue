import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Elements from './views/Elements';

import ElementsAll from '@/components/examples/00-elements/ElementsAll';
import ElementsGlobal from '@/components/examples/00-elements/00-global/ElementsGlobal';
import GlobalAll from '@/components/examples/00-elements/00-global/GlobalAll';
import ColorPaletteExample from '@/components/examples/00-elements/00-global/ColorPaletteExample';
import FontsExample from '@/components/examples/00-elements/00-global/FontsExample';

import ElementsText from '@/components/examples/00-elements/01-text/ElementsText';
import TextAll from '@/components/examples/00-elements/01-text/TextAll';
import HeadingsExample from '@/components/examples/00-elements/01-text/HeadingsExample';
import InlineElementsExample from '@/components/examples/00-elements/01-text/InlineElementsExample';
import ListItemExample from '@/components/examples/00-elements/01-text/ListItemExample';
import ParagraphsExample from '@/components/examples/00-elements/01-text/ParagraphsExample';
import SectionHeaderExample from '@/components/examples/00-elements/01-text/SectionHeaderExample';
import SectionHeadingExample from '@/components/examples/00-elements/01-text/SectionHeadingExample';
import SectionHeadingLargeExample from '@/components/examples/00-elements/01-text/SectionHeadingLargeExample';
import SectionSubheadingExample from '@/components/examples/00-elements/01-text/SectionSubheadingExample';
import ListHeadingExample from '@/components/examples/00-elements/01-text/ListHeadingExample';

import ElementsNavigation from '@/components/examples/00-elements/02-navigation/ElementsNavigation';
import NavigationAll from '@/components/examples/00-elements/02-navigation/NavigationAll';
import InlineLinkExample from '@/components/examples/00-elements/02-navigation/InlineLinkExample';
import LinkExample from '@/components/examples/00-elements/02-navigation/LinkExample';
import MenuItemExample from '@/components/examples/00-elements/02-navigation/MenuItemExample';
import PaginationExample from '@/components/examples/00-elements/02-navigation/PaginationExample';
import TabNavigationExample from '@/components/examples/00-elements/02-navigation/TabNavigationExample';

import ElementsIcon from '@/components/examples/00-elements/03-icons/ElementsIcon';
import IconAll from '@/components/examples/00-elements/03-icons/IconAll';
import IconExample from '@/components/examples/00-elements/03-icons/IconExample';

import ElementsForms from '@/components/examples/00-elements/04-forms/ElementsForms';
import FormsAll from '@/components/examples/00-elements/04-forms/FormsAll';
import CheckboxExample from '@/components/examples/00-elements/04-forms/CheckboxExample';
import InputsExample from '@/components/examples/00-elements/04-forms/InputsExample';
import RadioInputExample from '@/components/examples/00-elements/04-forms/RadioInputExample';
import SearchExample from '@/components/examples/00-elements/04-forms/SearchExample';
import SelectExample from '@/components/examples/00-elements/04-forms/SelectExample';
import TextAreaExample from '@/components/examples/00-elements/04-forms/TextAreaExample';

import ElementsButtons from '@/components/examples/00-elements/05-buttons/ElementsButtons';
import ButtonsAll from '@/components/examples/00-elements/05-buttons/ButtonsAll';
import BackToTopExample from '@/components/examples/00-elements/05-buttons/BackToTopExample';
import ButtonPrimaryExample from '@/components/examples/00-elements/05-buttons/ButtonPrimaryExample';
import ButtonDangerExample from '@/components/examples/00-elements/05-buttons/ButtonDangerExample';
import ButtonSuccessExample from '@/components/examples/00-elements/05-buttons/ButtonSuccessExample';
import ButtonInfoExample from '@/components/examples/00-elements/05-buttons/ButtonInfoExample';

import ElementsImages from '@/components/examples/00-elements/06-images/ElementsImages';
import ImagesAll from '@/components/examples/00-elements/06-images/ImagesAll';
import AvatarExample from '@/components/examples/00-elements/06-images/AvatarExample';
import ImageExample from '@/components/examples/00-elements/06-images/ImageExample';
import LogoExample from '@/components/examples/00-elements/06-images/LogoExample';

import Compounds from './views/Compounds';
import Components from './views/Components';
import Sections from './views/Sections';
import Pages from './views/Pages';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/elements',
      component: Elements,
      children: [
        {
          path: '/',
          component: ElementsAll
        },
        {
          path: 'global',
          component: ElementsGlobal,
          children: [
            {
              path: '/',
              component: GlobalAll
            },
            {
              path: 'color-palette',
              component: ColorPaletteExample
            },
            {
              path: 'fonts',
              component: FontsExample
            }
          ]
        },
        {
          path: 'text',
          component: ElementsText,
          children: [
            {
              path: '/',
              component: TextAll
            },
            {
              path: 'headings',
              component: HeadingsExample
            },
            {
              path: 'inline-elements',
              component: InlineElementsExample
            },
            {
              path: 'list-item',
              component: ListItemExample
            },
            {
              path: 'paragraphs',
              component: ParagraphsExample
            },
            {
              path: 'section-header',
              component: SectionHeaderExample
            },
            {
              path: 'section-heading',
              component: SectionHeadingExample
            },
            {
              path: 'section-heading-large',
              component: SectionHeadingLargeExample
            },
            {
              path: 'section-subheading',
              component: SectionSubheadingExample
            },
            {
              path: 'list-heading',
              component: ListHeadingExample
            }
          ]
        },
        {
          path: 'navigation',
          component: ElementsNavigation,
          children: [
            {
              path: '/',
              component: NavigationAll
            },
            {
              path: 'inline-link',
              component: InlineLinkExample
            },
            {
              path: 'link',
              component: LinkExample
            },
            {
              path: 'menu-item',
              component: MenuItemExample
            },
            {
              path: 'pagination',
              component: PaginationExample
            },
            {
              path: 'tab-navigation',
              component: TabNavigationExample
            }
          ]
        },
        {
          path: 'icons',
          component: ElementsIcon,
          children: [
            {
              path: '/',
              component: IconAll
            },
            {
              path: 'icons',
              component: IconExample
            }
          ]
        },
        {
          path: 'forms',
          component: ElementsForms,
          children: [
            {
              path: '/',
              component: FormsAll
            },
            {
              path: 'checkbox',
              component: CheckboxExample
            },
            {
              path: 'inputs',
              component: InputsExample
            },
            {
              path: 'radio',
              component: RadioInputExample
            },
            {
              path: 'search',
              component: SearchExample
            },
            {
              path: 'select',
              component: SelectExample
            },
            {
              path: 'text-area',
              component: TextAreaExample
            }
          ]
        },
        {
          path: 'buttons',
          component: ElementsButtons,
          children: [
            {
              path: '/',
              component: ButtonsAll
            },
            {
              path: 'back-to-top',
              component: BackToTopExample
            },
            {
              path: 'primary',
              component: ButtonPrimaryExample
            },
            {
              path: 'danger',
              component: ButtonDangerExample
            },
            {
              path: 'success',
              component: ButtonSuccessExample
            },
            {
              path: 'info',
              component: ButtonInfoExample
            }
          ]
        },
        {
          path: 'images',
          component: ElementsImages,
          children: [
            {
              path: '/',
              component: ImagesAll
            },
            {
              path: 'avatar',
              component: AvatarExample
            },
            {
              path: 'logo',
              component: LogoExample
            },
            {
              path: 'image',
              component: ImageExample
            }
          ]
        }
      ]
    },
    {
      path: '/compounds',
      name: 'compounds',
      component: Compounds
    },
    {
      path: '/components',
      name: 'components',
      component: Components
    },
    {
      path: '/sections',
      name: 'sections',
      component: Sections
    },
    {
      path: '/pages',
      name: 'pages',
      component: Pages
    }
  ]
});

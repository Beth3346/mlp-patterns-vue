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
import TabButtonExample from '@/components/examples/00-elements/02-navigation/TabNavigationExample';

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
import CompoundsAll from '@/components/examples/01-compounds/CompoundsAll';

import CompoundsBlocks from '@/components/examples/01-compounds/00-blocks/CompoundsBlocks';
import BlocksAll from '@/components/examples/01-compounds/00-blocks/BlocksAll';
import CardHeaderExample from '@/components/examples/01-compounds/00-blocks/CardHeaderExample';
import CardHeadingExample from '@/components/examples/01-compounds/00-blocks/CardHeadingExample';
import CardStatExample from '@/components/examples/01-compounds/00-blocks/CardStatExample';
import GroupHeaderExample from '@/components/examples/01-compounds/00-blocks/GroupHeaderExample';
import IconBlockExample from '@/components/examples/01-compounds/00-blocks/IconBlockExample';
import ItemDetailExample from '@/components/examples/01-compounds/00-blocks/ItemDetailExample';
import InfoSectionHeaderExample from '@/components/examples/01-compounds/00-blocks/InfoSectionHeaderExample';
import TabExample from '@/components/examples/01-compounds/00-blocks/TabExample';

import CompoundsText from '@/components/examples/01-compounds/01-text/CompoundsText';
import CompoundsTextAll from '@/components/examples/01-compounds/01-text/CompoundsTextAll';
import CardDetailsExample from '@/components/examples/01-compounds/01-text/CardDetailsExample';
import CopyrightExample from '@/components/examples/01-compounds/01-text/CopyrightExample';
import InlineListExample from '@/components/examples/01-compounds/01-text/InlineListExample';
import ListExample from '@/components/examples/01-compounds/01-text/ListExample';
import OrderedListExample from '@/components/examples/01-compounds/01-text/OrderedListExample';

import CompoundsNavigation from '@/components/examples/01-compounds/02-navigation/CompoundsNavigation';
import CompoundsNavigationAll from '@/components/examples/01-compounds/02-navigation/CompoundsNavigationAll';
import FooterNavigationExample from '@/components/examples/01-compounds/02-navigation/FooterNavigationExample';
import MainNavigationExample from '@/components/examples/01-compounds/02-navigation/MainNavigationExample';
import PaginationNavigationExample from '@/components/examples/01-compounds/02-navigation/PaginationNavigationExample';
import TabNavigationExample from '@/components/examples/01-compounds/02-navigation/TabNavigationExample';

import CompoundsMedia from '@/components/examples/01-compounds/03-media/CompoundsMedia';
import MediaAll from '@/components/examples/01-compounds/03-media/MediaAll';
import ImageElementExample from '@/components/examples/01-compounds/03-media/ImageElementExample';

import CompoundsForms from '@/components/examples/01-compounds/04-forms/CompoundsForms';
import CompoundsFormsAll from '@/components/examples/01-compounds/04-forms/CompoundsFormsAll';
import CheckboxElementExample from '@/components/examples/01-compounds/04-forms/CheckboxElementExample';
import PasswordInputExample from '@/components/examples/01-compounds/04-forms/PasswordInputExample';
import RadioElementExample from '@/components/examples/01-compounds/04-forms/RadioElementExample';
import SearchElementExample from '@/components/examples/01-compounds/04-forms/CheckboxElementExample';
import SelectElementExample from '@/components/examples/01-compounds/04-forms/SelectElementExample';
import TextAreaElementExample from '@/components/examples/01-compounds/04-forms/TextAreaElementExample';
import TextInputExample from '@/components/examples/01-compounds/04-forms/TextInputExample';

import CompoundsButtons from '@/components/examples/01-compounds/05-buttons/CompoundsButtons';
import CompoundsButtonsAll from '@/components/examples/01-compounds/05-buttons/CompoundsButtonsAll';
import ButtonGroupExample from '@/components/examples/01-compounds/05-buttons/ButtonGroupExample';
import PonyActionExample from '@/components/examples/01-compounds/05-buttons/PonyActionExample';

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
              component: TabButtonExample
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
      component: Compounds,
      children: [
        {
          path: '/',
          component: CompoundsAll
        },
        {
          path: 'blocks',
          component: CompoundsBlocks,
          children: [
            {
              path: '/',
              component: BlocksAll
            },
            {
              path: 'card-header',
              component: CardHeaderExample
            },
            {
              path: 'card-heading',
              component: CardHeadingExample
            },
            {
              path: 'card-stat',
              component: CardStatExample
            },
            {
              path: 'group-header',
              component: GroupHeaderExample
            },
            {
              path: 'icon-block',
              component: IconBlockExample
            },
            {
              path: 'info-section-header',
              component: InfoSectionHeaderExample
            },
            {
              path: 'item-detail',
              component: ItemDetailExample
            },
            {
              path: 'tab',
              component: TabExample
            }
          ]
        },
        {
          path: 'text',
          component: CompoundsText,
          children: [
            {
              path: '/',
              component: CompoundsTextAll
            },
            {
              path: 'card-details',
              component: CardDetailsExample
            },
            {
              path: 'copyright',
              component: CopyrightExample
            },
            {
              path: 'inline-list',
              component: InlineListExample
            },
            {
              path: 'list',
              component: ListExample
            },
            {
              path: 'ordered-list',
              component: OrderedListExample
            }
          ]
        },
        {
          path: 'navigation',
          component: CompoundsNavigation,
          children: [
            {
              path: '/',
              component: CompoundsNavigationAll
            },
            {
              path: 'footer-navigation',
              component: FooterNavigationExample
            },
            {
              path: 'main-navigation',
              component: MainNavigationExample
            },
            {
              path: 'pagination',
              component: PaginationNavigationExample
            },
            {
              path: 'tab-navigation',
              component: TabNavigationExample
            }
          ]
        },
        {
          path: 'media',
          component: CompoundsMedia,
          children: [
            {
              path: '/',
              component: MediaAll
            },
            {
              path: 'image',
              component: ImageElementExample
            }
          ]
        },
        {
          path: 'forms',
          component: CompoundsForms,
          children: [
            {
              path: '/',
              component: CompoundsFormsAll
            },
            {
              path: 'checkbox',
              component: CheckboxElementExample
            },
            {
              path: 'password',
              component: PasswordInputExample
            },
            {
              path: 'radio',
              component: RadioElementExample
            },
            {
              path: 'search',
              component: SearchElementExample
            },
            {
              path: 'select',
              component: SelectElementExample
            },
            {
              path: 'text-area',
              component: TextAreaElementExample
            },
            {
              path: 'text-input',
              component: TextInputExample
            }
          ]
        },
        {
          path: 'buttons',
          component: CompoundsButtons,
          children: [
            {
              path: '/',
              component: CompoundsButtonsAll
            },
            {
              path: 'button-group',
              component: ButtonGroupExample
            },
            {
              path: 'pony-action',
              component: PonyActionExample
            }
          ]
        }
      ]
    },
    {
      path: '/components',
      component: Components
    },
    {
      path: '/sections',
      component: Sections
    },
    {
      path: '/pages',
      component: Pages
    }
  ]
});

import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Elements from './views/Elements';

import ElementsGlobal from '@/components/examples/00-elements/00-global/ElementsGlobal';
import GlobalAll from '@/components/examples/00-elements/00-global/GlobalAll';
import ColorPaletteExample from '@/components/examples/00-elements/00-global/ColorPaletteExample';
import FontsExample from '@/components/examples/00-elements/00-global/FontsExample';

import ElementsText from '@/components/examples/00-elements/01-text/ElementsText';
import TextAll from '@/components/examples/00-elements/01-text/TextAll';
import HeadingsExample from '@/components/examples/00-elements/01-text/HeadingsExample';
import InlineElementsExample from '@/components/examples/00-elements/01-text/InlineElementsExample';
import ListItemsExample from '@/components/examples/00-elements/01-text/ListItemsExample';
import ParagraphsExample from '@/components/examples/00-elements/01-text/ParagraphsExample';
import SectionHeaderExample from '@/components/examples/00-elements/01-text/SectionHeaderExample';
import SectionHeadingExample from '@/components/examples/00-elements/01-text/SectionHeadingExample';
import SectionHeadingLargeExample from '@/components/examples/00-elements/01-text/SectionHeadingLargeExample';
import SectionSubheadingExample from '@/components/examples/00-elements/01-text/SectionSubheadingExample';

import ElementsNavigation from '@/components/examples/00-elements/02-navigation/ElementsNavigation';
import NavigationAll from '@/components/examples/00-elements/02-navigation/NavigationAll';
import InlineLinkExample from '@/components/examples/00-elements/02-navigation/InlineLinkExample';
import LinkExample from '@/components/examples/00-elements/02-navigation/LinkExample';
import MenuItemExample from '@/components/examples/00-elements/02-navigation/MenuItemExample';
import PaginationExample from '@/components/examples/00-elements/02-navigation/PaginationExample';
import TabNavigationExample from '@/components/examples/00-elements/02-navigation/TabNavigationExample';

import ElementsIcon from '@/components/examples/00-elements/03-icons/ElementsIcon';

import ElementsForms from '@/components/examples/00-elements/04-forms/ElementsForms';

import ElementsButtons from '@/components/examples/00-elements/05-buttons/ElementsButtons';

import ElementsImages from '@/components/examples/00-elements/06-images/ElementsImages';

import Compounds from './views/Compounds';

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
              path: 'list-items',
              component: ListItemsExample
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
          component: ElementsIcon
        },
        {
          path: 'forms',
          component: ElementsForms
        },
        {
          path: 'buttons',
          component: ElementsButtons
        },
        {
          path: 'images',
          component: ElementsImages
        }
      ]
    },
    {
      path: '/compounds',
      name: 'compounds',
      component: Compounds
    }
  ]
});

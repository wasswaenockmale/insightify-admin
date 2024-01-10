import type { Schema, Attribute } from '@strapi/strapi';

export interface ContactContactInformation extends Schema.Component {
  collectionName: 'components_contact_contact_informations';
  info: {
    displayName: 'Contact Information';
    icon: 'headphone';
  };
  attributes: {
    Name: Attribute.String;
    Email: Attribute.Email;
    Phone: Attribute.String;
  };
}

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    background: Attribute.Media;
    button: Attribute.String;
    showButton: Attribute.Boolean;
    showTitle: Attribute.Boolean;
    isHeroSection: Attribute.Boolean & Attribute.DefaultTo<false>;
    order: Attribute.Integer &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMax<{
        min: 0;
      }>;
  };
}

export interface StepStep extends Schema.Component {
  collectionName: 'components_step_steps';
  info: {
    displayName: 'Step';
    icon: 'grid';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    details: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 15;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contact.contact-information': ContactContactInformation;
      'hero.hero': HeroHero;
      'step.step': StepStep;
    }
  }
}

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
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Blocks;
    Background: Attribute.Media;
    Button: Attribute.String;
    showButton: Attribute.Boolean;
    showTitle: Attribute.Boolean;
  };
}

export interface StepStep extends Schema.Component {
  collectionName: 'components_step_steps';
  info: {
    displayName: 'Step';
    icon: 'grid';
  };
  attributes: {
    Icon: Attribute.Media;
    Paragraph: Attribute.String;
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

import { ContentIndexComponent } from './index/index.component';

const module = angular.module('govuk-single-page-sdk.content-docs', [])

  .component('contentIndexPage', ContentIndexComponent);

export const contentDocs = module.name;
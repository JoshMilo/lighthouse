/**
 * @license Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

import _CategoryRenderer = require('../lighthouse-core/report/html/renderer/category-renderer.js');
import _CriticalRequestChainRenderer = require('../lighthouse-core/report/html/renderer/crc-details-renderer.js');
import _DetailsRenderer = require('../lighthouse-core/report/html/renderer/details-renderer.js');
import _DOM = require('../lighthouse-core/report/html/renderer/dom.js');
import _PerformanceCategoryRenderer = require('../lighthouse-core/report/html/renderer/performance-category-renderer.js');
import _ReportRenderer = require('../lighthouse-core/report/html/renderer/report-renderer.js');
import _ReportUIFeatures = require('../lighthouse-core/report/html/renderer/report-ui-features.js');
import _Util = require('../lighthouse-core/report/html/renderer/util.js');
import _PSI = require('../lighthouse-core/report/html/renderer/psi.js');
import _FileNamer = require('../lighthouse-core/lib/file-namer.js');

declare global {
  var CategoryRenderer: typeof _CategoryRenderer;
  var CriticalRequestChainRenderer: typeof _CriticalRequestChainRenderer;
  var DetailsRenderer: typeof _DetailsRenderer;
  var DOM: typeof _DOM;
  var getFilenamePrefix: typeof _FileNamer.getFilenamePrefix;
  var PerformanceCategoryRenderer: typeof _PerformanceCategoryRenderer;
  var ReportRenderer: typeof _ReportRenderer;
  var ReportUIFeatures: typeof _ReportUIFeatures;
  var Util: typeof _Util;
  var PSI: typeof _PSI;

  interface Window {
    CategoryRenderer: typeof _CategoryRenderer;
    CriticalRequestChainRenderer: typeof _CriticalRequestChainRenderer;
    DetailsRenderer: typeof _DetailsRenderer;
    DOM: typeof _DOM;
    PerformanceCategoryRenderer: typeof _PerformanceCategoryRenderer;
    ReportRenderer: typeof _ReportRenderer;
    ReportUIFeatures: typeof _ReportUIFeatures;
    Util: typeof _Util;
    PSI: typeof _PSI;
  }

  module LH {
    // During report generation, the LHR object is transformed a bit for convenience
    // Primarily, the auditResult is added as .result onto the auditRef.
    // Also: a reportCategories property is added. We're lazy sometimes. It'll be removed in due time.
    export interface ReportResult extends Result {
      categories: Record<string, ReportResult.Category>;
      reportCategories: Array<ReportResult.Category>;
    }
    export module ReportResult {
      export interface Category extends Result.Category {
        auditRefs: Array<AuditRef>
      }
      export interface AuditRef extends Result.AuditRef {
        result: Audit.Result
      }
    }
  }
}

// empty export to keep file a module
export {}

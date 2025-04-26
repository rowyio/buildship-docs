import { MDXProvidedComponents } from './components';

export interface Props {
  /** BuildShip URL for the project */
  host: string;
  /** BuildShip Project ID */
  projectId?: string;
  /** BuildShip Workflow ID */
  flowId?: string;
  /** Location of the project */
  locationId?: string;
  /** Node values */
  triggerValues?: any;
  trigger?: Trigger;
  /** Workflow input */
  inputs?: NodeInput;
  /** Workflow output */
  output?: NodeInput;
  isTriggerChanged: boolean;
  /** Get Firebase ID token */
  getIdToken?: () => Promise<string> | undefined;
  flowLabel?: string;
  /** The workflow */
  flow?: any;
  toolFlowToOpenApi: (flows: Array<any>, baseUrl: string) => Record<string, any>;
  components: MDXProvidedComponents;
  /** CodeMirror */
  cm: {
    extensions: {
      [key: string]: Function;
    };
  };
  /** BuildShip schema to simple JSON schema */
  simplifySchema: (schema: any) => any;
}

type NodeInput = {
  type: 'object';

  /**
   * Input parameters for the node.
   */
  properties: {
    [key: string]: NodeInputParam;
  };

  /**
   * Input sections for the node
   */
  sections?: {
    [key: string]: NodeInputSection;
  };

  /**
   * The nested tree structure of inputs
   */

  structure?: {
    id: UniqueIdentifier;
    children?: NodeInput['structure'];
  }[];

  /**
   * Defines the required properties.
   */
  required: Array<string>;
};

type Trigger = {
  [k: string]: any;
};

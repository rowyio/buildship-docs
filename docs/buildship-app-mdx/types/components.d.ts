import { Box, SxProps, TextFieldProps, Typography, SvgIcon } from '@mui/material';

declare global {
  type MDXProvidedComponents = {
    SvgIcon: typeof SvgIcon;
    Typography: typeof Typography;
    Box: typeof Box;
    Select: TextFieldProps<'standard'> & {};
    CodeViewer: React.FC<{
      code: string;
      language: 'html' | 'json' | 'js' | 'ts';
      copy?: boolean;
    }>;
    CodeSamples: React.FC<{
      samples: { code: string; language: 'html' | 'json' | 'js' | 'ts'; label: string }[];
    }>;
    ClipboardTextArea: React.FC<{ label: string; description: string; content: string }>;
    ClipboardTextField: React.FC<{
      label: string;
      description: string;
      content: string;
      multiline?: boolean;
      rows?: number;
    }>;
    ChatWidget: React.FC<{
      buttonName: string;
      widgetTitle: string;
      greetingMessage: string;
      closeOnOutsideClick: boolean;
      disableErrorAlert: boolean;
      openOnLoad: boolean;
      responseIsAStream: boolean;
      triggerId: string;
      widgetEndpoint?: string;
    }>;
    ChatWidgetConfiguration: React.FC<{ triggerId: string }>;
    SetTabButton: React.FC<{ title: string; tab: 'Setup' | 'Usage' }>;
    CopyButton: React.FC<{
      content: string;
      variant?: 'collapsed' | 'expanded';
      timeout?: number;
      label?: string;
      sx?: SxProps;
    }>;
    CodeMirror: React.FC<any>;
  };
}

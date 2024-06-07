import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { load } from 'cheerio';
import assign from 'object-assign';

interface IconFromPathProps extends SvgIconProps {
  paths?: string[];
  svgString?: string;
}
export default function IconFromPath({ paths, svgString, ...props }: IconFromPathProps) {
  let _paths = paths;
  if (svgString) {
    _paths = svgToPath(svgString);
  }
  if (!_paths) {
    return null;
  }
  return (
    <SvgIcon {...props}>
      {_paths.map((path, i) => (
        <path d={path} key={i} />
      ))}
    </SvgIcon>
  );
}

export const svgToPath = (svg_string: string | null) => {
  if (!svg_string) return [];

  try {
    let $ = load(svg_string, assign({ xmlMode: true }, {}));

    let paths: string[] = [];
    $('path').each(function () {
      let d = $(this).attr('d');
      if (d) {
        paths.push(d.replace(/\s+/g, ' '));
      }
    });
    return paths;
  } catch (err) {
    return [];
  }
};


"use client";

type AdsterraFrameProps = {
  zoneKey: string;
  width: number;
  height: number;
  className?: string;
};

export default function AdsterraFrame({
  zoneKey,
  width,
  height,
  className = "",
}: AdsterraFrameProps) {
  const srcDoc = `<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  html, body {
    margin: 0;
    padding: 0;
    width: ${width}px;
    min-height: ${height}px;
    overflow: hidden;
    background: transparent;
  }
</style>
</head>
<body>
<script>
  var atOptions = {
    key: "${zoneKey}",
    format: "iframe",
    height: ${height},
    width: ${width},
    params: {}
  };
</script>
<script src="https://czernik.org/22/${zoneKey}"></script>
</body>
</html>`;

  return (
    <iframe
      title="Advertisement"
      srcDoc={srcDoc}
      width={width}
      height={height}
      loading="lazy"
      sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
      referrerPolicy="no-referrer-when-downgrade"
      className={className}
      style={{ border: 0, overflow: "hidden" }}
    />
  );
}

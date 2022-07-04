import './Box.css';
export default function Box({ type, classNames = '', styles }) {
  return (
    <div style={styles} className={`box box-${type} ${classNames}`}>
      Box
    </div>
  );
}

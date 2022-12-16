import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectFileById } from './store/filesSlice';
import StyledIcon from './StyledIcon';

function DetailSidebarContent(props) {
  const selectedItem = useSelector((state) =>
    selectFileById(state, state.fileManagerApp.files.selectedItemId)
  );

  if (!selectedItem) {
    return null;
  }

  return (
    <motion.div
      initial={{ y: 50, opacity: 0.8 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
      className="file-details p-16 sm:p-24"
    >
      <div className="preview h-128 sm:h-256 file-icon flex items-center justify-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.3 } }}>
          <StyledIcon className="text-48" type={selectedItem.type} />
        </motion.div>
      </div>

      <FormControlLabel
        className="offline-switch"
        control={<Switch checked={selectedItem.offline} aria-label="Available Offline" />}
        label="Available Offline"
      />

      <Typography variant="subtitle1" className="py-16">
        Info
      </Typography>

      <table className="w-full text-justify">
        <tbody>
          <tr className="type h-52">
            <th className="font-semibold">Type</th>
            <td>{selectedItem.type}</td>
          </tr>

          <tr className="size h-52">
            <th className="font-semibold">Size</th>
            <td>{selectedItem.size === '' ? '-' : selectedItem.size}</td>
          </tr>

          <tr className="location h-52 text-left">
            <th className="font-semibold">Location</th>
            <td>{selectedItem.location}</td>
          </tr>

          <tr className="owner h-52">
            <th className="font-semibold">Owner</th>
            <td>{selectedItem.owner}</td>
          </tr>

          <tr className="modified h-52">
            <th className="font-semibold">Modified</th>
            <td>{selectedItem.modified}</td>
          </tr>

          <tr className="opened h-52">
            <th className="font-semibold">Opened</th>
            <td>{selectedItem.opened}</td>
          </tr>

          <tr className="created h-52">
            <th className="font-semibold">Created</th>
            <td>{selectedItem.created}</td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
}

export default DetailSidebarContent;

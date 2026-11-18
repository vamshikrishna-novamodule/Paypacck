let announcement = "Welcome to the dojo!";

export default function AnnouncementBoard() {
  function handleDismiss() {
    announcement = "Announcement dismissed.";
    console.log("announcement", announcement);
  }

  return (
    <div>
      <p>{announcement}</p>
      <button onClick={handleDismiss}>Dismiss</button>
    </div>
  );
}
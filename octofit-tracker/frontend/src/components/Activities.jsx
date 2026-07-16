import { useState, useEffect } from 'react';
import apiClient from '../api';

// API Endpoint: https://{CODESPACE_NAME}-8000.app.github.dev/api/activities
export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadActivities = async () => {
      try {
        setLoading(true);
        const data = await apiClient.fetchActivities();
        setActivities(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadActivities();
  }, []);

  if (loading) return <div className="container mt-5"><p>Loading activities...</p></div>;
  if (error) return <div className="container mt-5"><p className="text-danger">Error: {error}</p></div>;

  return (
    <div className="container mt-5">
      <h2>Activities</h2>
      {activities.length === 0 ? (
        <p>No activities found</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>User</th>
              <th>Type</th>
              <th>Duration (min)</th>
              <th>Distance (km)</th>
              <th>Calories</th>
              <th>Points</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity._id}>
                <td>{activity.user?.name || 'Unknown'}</td>
                <td><span className="badge bg-info">{activity.type}</span></td>
                <td>{activity.duration}</td>
                <td>{activity.distance || '-'}</td>
                <td>{activity.calories || '-'}</td>
                <td><span className="badge bg-success">{activity.points}</span></td>
                <td>{new Date(activity.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

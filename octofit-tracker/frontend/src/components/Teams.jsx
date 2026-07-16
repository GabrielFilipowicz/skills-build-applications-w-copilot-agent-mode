import { useState, useEffect } from 'react';
import apiClient from '../api';

// API Endpoint: https://{CODESPACE_NAME}-8000.app.github.dev/api/teams
export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTeams = async () => {
      try {
        setLoading(true);
        const data = await apiClient.fetchTeams();
        setTeams(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadTeams();
  }, []);

  if (loading) return <div className="container mt-5"><p>Loading teams...</p></div>;
  if (error) return <div className="container mt-5"><p className="text-danger">Error: {error}</p></div>;

  return (
    <div className="container mt-5">
      <h2>Teams</h2>
      {teams.length === 0 ? (
        <p>No teams found</p>
      ) : (
        <div className="row">
          {teams.map((team) => (
            <div key={team._id} className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{team.name}</h5>
                  <p className="card-text">{team.description}</p>
                  <p>
                    <strong>Members:</strong> {team.members?.length || 0}
                  </p>
                  <p>
                    <strong>Total Points:</strong> <span className="badge bg-primary">{team.totalPoints}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

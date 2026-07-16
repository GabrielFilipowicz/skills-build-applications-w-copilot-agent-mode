import { useState, useEffect } from 'react';
import apiClient from '../api';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        setLoading(true);
        const data = await apiClient.fetchWorkouts();
        setWorkouts(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadWorkouts();
  }, []);

  if (loading) return <div className="container mt-5"><p>Loading workouts...</p></div>;
  if (error) return <div className="container mt-5"><p className="text-danger">Error: {error}</p></div>;

  return (
    <div className="container mt-5">
      <h2>💪 Personalized Workouts</h2>
      {workouts.length === 0 ? (
        <p>No workouts found</p>
      ) : (
        <div className="row">
          {workouts.map((workout) => (
            <div key={workout._id} className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{workout.name}</h5>
                  <p className="card-text">{workout.description}</p>
                  <p>
                    <strong>Difficulty:</strong>{' '}
                    <span
                      className={`badge ${
                        workout.difficulty === 'beginner'
                          ? 'bg-success'
                          : workout.difficulty === 'intermediate'
                            ? 'bg-warning'
                            : 'bg-danger'
                      }`}
                    >
                      {workout.difficulty}
                    </span>
                  </p>
                  <p>
                    <strong>Duration:</strong> {workout.estimatedDuration} minutes
                  </p>
                  {workout.exercises && workout.exercises.length > 0 && (
                    <div>
                      <strong>Exercises:</strong>
                      <ul className="small">
                        {workout.exercises.map((ex, idx) => (
                          <li key={idx}>
                            {ex.name}
                            {ex.sets && ` - ${ex.sets} sets`}
                            {ex.reps && ` x ${ex.reps} reps`}
                            {ex.duration && ` - ${ex.duration} min`}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

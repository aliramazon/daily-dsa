/** Function for calculating the gaps in a schedule when a client is unattended.

  Clients are children and cannot be left unattended between appointments.
  Clients are dropped off at the clinic at start of a Visit and picked up at the end.

  :param clientVisits: A list of time ranges when a client will be in the clinic.
  :param appointments: A list of all scheduled appointments.
  :return: A list of gaps between these visits and appointments, sorted by gap start time ascending.
  **/

interface Visit {
    clientId: string;
    start: Date;
    end: Date;
}

interface Appointment {
    clientId: string;
    staffId: string;
    start: Date;
    end: Date;
}

interface Gap {
    clientId: string;
    start: Date;
    end: Date;
}

const groupAppointmentsByClient = (
    appointments: Appointment[]
): Record<string, Appointment[]> => {
    const clientAppointments: Record<string, Appointment[]> = {};

    for (const appointment of appointments) {
        const { clientId } = appointment;
        if (clientAppointments[clientId]) {
            clientAppointments[clientId].push(appointment);
        } else {
            clientAppointments[clientId] = [appointment];
        }
    }

    return clientAppointments;
};

const findGaps = (
    clientVisits: Visit[],
    appointments: Appointment[]
): Gap[] => {
    const gaps: Gap[] = [];
    const appointmentsByClient = groupAppointmentsByClient(appointments);

    for (const clientVisit of clientVisits) {
        const clientAppointments = appointmentsByClient[
            clientVisit.clientId
        ].sort((a, b) => a.start.getTime() - b.start.getTime());
        let slidingStartTime = clientVisit.start;

        for (const clientAppointment of clientAppointments) {
            if (clientAppointment.start > slidingStartTime) {
                gaps.push({
                    clientId: clientVisit.clientId,
                    start: slidingStartTime,
                    end: clientAppointment.start,
                });
                slidingStartTime = clientAppointment.end;
            }
        }

        if (clientVisit.end > slidingStartTime) {
            gaps.push({
                clientId: clientVisit.clientId,
                start: slidingStartTime,
                end: clientVisit.end,
            });
        }
    }

    return gaps;
};

// Sample visits
const visits: Visit[] = [
    {
        clientId: "c1",
        start: new Date("2025-07-31T10:00:00.000Z"),
        end: new Date("2025-07-31T14:00:00.000Z"),
    },
    {
        clientId: "c2",
        start: new Date("2025-07-31T09:00:00.000Z"),
        end: new Date("2025-07-31T12:00:00.000Z"),
    },
];

// Sample appointments
const appointments: Appointment[] = [
    {
        clientId: "c1",
        staffId: "s1",
        start: new Date("2025-07-31T10:30:00.000Z"),
        end: new Date("2025-07-31T11:00:00.000Z"),
    },
    {
        clientId: "c1",
        staffId: "s2",
        start: new Date("2025-07-31T12:30:00.000Z"),
        end: new Date("2025-07-31T13:00:00.000Z"),
    },
    {
        clientId: "c2",
        staffId: "s3",
        start: new Date("2025-07-31T09:30:00.000Z"),
        end: new Date("2025-07-31T10:00:00.000Z"),
    },
];

// Run
const result = findGaps(visits, appointments);
console.log(result);

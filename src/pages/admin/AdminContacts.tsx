import { useState } from "react";
import { motion } from "framer-motion";
import { Trash2, Eye, CheckCircle, AlertCircle } from "lucide-react";
import {
  useGetAllContactsQuery,
  useDeleteContactMutation,
  useUpdateContactStatusMutation,
  useGetContactStatsQuery,
} from "@/store/contactApi";
import { useToast } from "@/hooks/use-toast";

const AdminContacts = () => {
  const { toast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedContact, setSelectedContact] = useState<any>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  // Queries
  const { data: contactsData, isLoading: isLoadingContacts, refetch } = useGetAllContactsQuery({
    page: currentPage,
    limit: 10,
  });
  const { data: statsData } = useGetContactStatsQuery();

  // Mutations
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const [updateStatus, { isLoading: isUpdatingStatus }] = useUpdateContactStatusMutation();

  const contacts = contactsData?.data || [];
  const pagination = contactsData?.pagination;
  const stats = statsData?.data;

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this contact?")) return;

    try {
      await deleteContact(id).unwrap();
      toast({
        title: "Success",
        description: "Contact deleted successfully",
      });
      refetch();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error?.data?.message || "Failed to delete contact",
        variant: "destructive",
      });
    }
  };

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      await updateStatus({ id, status: newStatus }).unwrap();
      toast({
        title: "Success",
        description: "Contact status updated",
      });
      refetch();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error?.data?.message || "Failed to update status",
        variant: "destructive",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "read":
        return "bg-yellow-100 text-yellow-800";
      case "replied":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "replied":
        return <CheckCircle size={16} />;
      case "new":
        return <AlertCircle size={16} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Contact Submissions</h1>
          <p className="text-slate-600">Manage and respond to customer inquiries</p>
        </motion.div>

        {/* Stats */}
        {stats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          >
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm font-medium">Total Submissions</p>
                  <p className="text-3xl font-bold text-slate-900">{stats.total}</p>
                </div>
                <div className="bg-blue-100 rounded-lg p-3">
                  <div className="text-blue-600 font-bold">{stats.total}</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm font-medium">New Messages</p>
                  <p className="text-3xl font-bold text-blue-600">{stats.byStatus.new}</p>
                </div>
                <AlertCircle className="text-blue-600" size={32} />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm font-medium">Read</p>
                  <p className="text-3xl font-bold text-yellow-600">{stats.byStatus.read}</p>
                </div>
                <Eye className="text-yellow-600" size={32} />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-500 text-sm font-medium">Replied</p>
                  <p className="text-3xl font-bold text-green-600">{stats.byStatus.replied}</p>
                </div>
                <CheckCircle className="text-green-600" size={32} />
              </div>
            </div>
          </motion.div>
        )}

        {/* Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow overflow-hidden"
        >
          {isLoadingContacts ? (
            <div className="p-8 text-center">
              <div className="animate-spin inline-block w-8 h-8 border-4 border-slate-200 border-t-slate-900 rounded-full"></div>
              <p className="mt-4 text-slate-600">Loading contacts...</p>
            </div>
          ) : contacts.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-slate-600">No contacts found</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                        Phone
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                        Subject
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {contacts.map((contact: any) => (
                      <tr
                        key={contact._id}
                        className="hover:bg-slate-50 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <p className="text-sm font-medium text-slate-900">{contact.name}</p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <p className="text-sm text-slate-600">{contact.email}</p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <a
                            href={`tel:${contact.phone}`}
                            className="text-sm text-blue-600 hover:underline"
                          >
                            {contact.phone}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <p className="text-sm text-slate-600">{contact.subject}</p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span
                              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                                contact.status
                              )}`}
                            >
                              {getStatusIcon(contact.status)}
                              {contact.status.charAt(0).toUpperCase() +
                                contact.status.slice(1)}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <p className="text-sm text-slate-600">
                            {new Date(contact.createdAt).toLocaleDateString("en-IN")}
                          </p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                setSelectedContact(contact);
                                setShowDetailsModal(true);
                              }}
                              className="text-blue-600 hover:text-blue-800 p-1.5 hover:bg-blue-50 rounded"
                              title="View details"
                            >
                              <Eye size={18} />
                            </button>

                            {/* Status dropdown */}
                            <select
                              value={contact.status}
                              onChange={(e) =>
                                handleStatusUpdate(contact._id, e.target.value)
                              }
                              disabled={isUpdatingStatus}
                              className="text-xs px-2 py-1 border border-slate-200 rounded hover:border-slate-300 disabled:opacity-50"
                            >
                              <option value="new">New</option>
                              <option value="read">Read</option>
                              <option value="replied">Replied</option>
                            </select>

                            <button
                              onClick={() => handleDelete(contact._id)}
                              disabled={isDeleting}
                              className="text-red-600 hover:text-red-800 p-1.5 hover:bg-red-50 rounded disabled:opacity-50"
                              title="Delete"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {pagination && pagination.totalPages > 1 && (
                <div className="border-t border-slate-200 px-6 py-4 flex items-center justify-between bg-slate-50">
                  <p className="text-sm text-slate-600">
                    Page {pagination.currentPage} of {pagination.totalPages}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={pagination.currentPage === 1}
                      className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 text-sm font-medium"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() =>
                        setCurrentPage((p) =>
                          Math.min(pagination.totalPages, p + 1)
                        )
                      }
                      disabled={pagination.currentPage === pagination.totalPages}
                      className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 text-sm font-medium"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </motion.div>
      </div>

      {/* Details Modal */}
      {showDetailsModal && selectedContact && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-96 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-slate-900">Contact Details</h2>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="text-slate-400 hover:text-slate-600 text-2xl leading-none"
                >
                  ×
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Name</p>
                    <p className="text-slate-900">{selectedContact.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Email</p>
                    <a
                      href={`mailto:${selectedContact.email}`}
                      className="text-blue-600 hover:underline"
                    >
                      {selectedContact.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Phone</p>
                    <a
                      href={`tel:${selectedContact.phone}`}
                      className="text-blue-600 hover:underline"
                    >
                      {selectedContact.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Subject</p>
                    <p className="text-slate-900">{selectedContact.subject}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-slate-500 font-medium mb-2">Message</p>
                  <p className="text-slate-900 bg-slate-50 p-4 rounded-lg whitespace-pre-wrap">
                    {selectedContact.message}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Status</p>
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${getStatusColor(
                        selectedContact.status
                      )}`}
                    >
                      {getStatusIcon(selectedContact.status)}
                      {selectedContact.status.charAt(0).toUpperCase() +
                        selectedContact.status.slice(1)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Submitted</p>
                    <p className="text-slate-900">
                      {new Date(selectedContact.createdAt).toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <select
                  value={selectedContact.status}
                  onChange={(e) => {
                    handleStatusUpdate(selectedContact._id, e.target.value);
                    setShowDetailsModal(false);
                  }}
                  disabled={isUpdatingStatus}
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg text-sm"
                >
                  <option value="new">Mark as New</option>
                  <option value="read">Mark as Read</option>
                  <option value="replied">Mark as Replied</option>
                </select>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="px-6 py-2 bg-slate-200 hover:bg-slate-300 rounded-lg font-medium text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminContacts;
